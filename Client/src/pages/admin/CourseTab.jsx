import React, { useEffect, useState } from 'react'
import { Loader2 } from 'lucide-react'
import RichTextEditor from '../../components/RichTextEditor'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'
import { toast } from 'sonner'
import { setCourse, setLoading } from '@/redux/courseSlice'
import { useDispatch, useSelector } from 'react-redux'
import { Label } from '@/components/ui/label'
import { Input } from '@/components/ui/input'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import { Select, SelectContent, SelectGroup, SelectItem, SelectLabel, SelectTrigger, SelectValue } from '@/components/ui/select'
import SideBar from '../../components/SideBar' // ✅ Add your sidebar component

const CourseTab = () => {
  const { course, loading } = useSelector(store => store.course)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const params = useParams()
  const id = params.courseId
  const selectCourse = course.find(course => course._id === id)
  const [selectedCourse, setSelectedCourse] = useState(selectCourse)
  const [publish, setPublish] = useState(false)

  const getCourseById = async () => {
    try {
      const res = await axios.get(`http://localhost:8000/api/v1/course/${id}`, { withCredentials: true })
      if (res.data.success) {
        setSelectedCourse(res.data.course)
      }
    } catch (error) {
      console.log((error));
    }
  }

  const getCreatorCourse = async () => {
    try {
      const res = await axios.get('http://localhost:8000/api/v1/course/', { withCredentials: true })
      if (res.data.success) {
        dispatch(setCourse(res.data.courses))
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    getCreatorCourse()
    getCourseById()
  }, [publish])

  const [input, setInput] = useState({
    courseTitle: selectedCourse?.courseTitle,
    subTitle: selectedCourse?.subTitle,
    description: selectedCourse?.description,
    category: selectedCourse?.category,
    courseLevel: selectedCourse?.courseLevel,
    coursePrice: selectedCourse?.coursePrice,
    file: "",
  });

  const [previewThumbnail, setPreviewThumbnail] = useState(selectedCourse?.courseThumbnail);

  const changeEventHandler = (e) => {
    const { name, value } = e.target;
    setInput({ ...input, [name]: value });
  };

  const selectCategory = (value) => {
    setInput({ ...input, category: value });
  };

  const selectCourseLevel = (value) => {
    setInput({ ...input, courseLevel: value });
  };

  const selectThumbnail = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      setInput({ ...input, courseThumbnail: file });
      const fileReader = new FileReader();
      fileReader.onloadend = () => setPreviewThumbnail(fileReader.result);
      fileReader.readAsDataURL(file);
    }
  };

  const updateCourseHandler = async () => {
    const formData = new FormData();
    formData.append("courseTitle", input.courseTitle);
    formData.append("subTitle", input.subTitle);
    formData.append("description", input.description);
    formData.append("category", input.category);
    formData.append("courseLevel", input.courseLevel);
    formData.append("coursePrice", input.coursePrice);
    formData.append("file", input.courseThumbnail);

    try {
      dispatch(setLoading(true))
      const res = await axios.put(`http://localhost:8000/api/v1/course/${id}`, formData, {
        headers: {
          "Content-Type": "multipart/form-data"
        },
        withCredentials: true,
      })
      if (res.data.success) {
        navigate(`lecture`)
        toast.success(res.data.message)
        dispatch([...course, setCourse(res.data.course)])
      }
    } catch (error) {
      console.log(error);
    } finally {
      dispatch(setLoading(false))
    }
  }

  const togglePublishUnpublish = async (action) => {
    try {
      const res = await axios.patch(`http://localhost:8000/api/v1/course/${id}`, {
        params: {
          action
        },
        withCredentials: true
      })
      if (res.data.success) {
        setPublish(!publish)
        toast.success(res.data.message)
      } else {
        toast.error("Failed to update")
      }
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="flex min-h-screen">
      {/* Sidebar */}
      <div className="hidden md:block fixed top-[0px] left-0 w-64 h-[calc(100vh-1px)] bg-gray-900 text-white z-40">
        <SideBar />
      </div>

      {/* Main content */}
      <div className="flex-1 md:ml-64 p-4 bg-gray-100">
        <Card className="w-full">
          <CardHeader className="flex flex-col md:flex-row md:justify-between md:items-center gap-4">
            <div>
              <CardTitle className="mb-1">Basic Course Information</CardTitle>
              <CardDescription>
                Make changes to your courses here. Click save when you're done.
              </CardDescription>
            </div>
            <div className="flex flex-col sm:flex-row gap-2 w-full md:w-auto">
              <Button
                className="bg-blue-500 hover:bg-blue-600 text-white w-full sm:w-auto"
                onClick={() => togglePublishUnpublish(selectedCourse?.isPublished ? "false" : "true")}
              >
                {selectedCourse?.isPublished ? "UnPublish" : "Publish"}
              </Button>
              <Button className="bg-red-500 hover:bg-red-600 text-white w-full sm:w-auto" variant="destructive">
                Remove Course
              </Button>
            </div>
          </CardHeader>

          <CardContent>
            <div className="space-y-4 mt-5">
              <div>
                <Label className="mb-2">Title</Label>
                <Input
                  type="text"
                  name="courseTitle"
                  value={input.courseTitle}
                  onChange={changeEventHandler}
                  placeholder="Ex. Fullstack developer"
                  className="w-full"
                />
              </div>

              <div>
                <Label className="mb-2">Subtitle</Label>
                <Input
                  type="text"
                  name="subTitle"
                  value={input.subTitle}
                  onChange={changeEventHandler}
                  placeholder="Ex. Become a Fullstack developer..."
                  className="w-full"
                />
              </div>

              <div>
                <Label className="mb-2">Description</Label>
                <RichTextEditor input={input} setInput={setInput} />
              </div>

              <div className="flex flex-col md:flex-row md:flex-wrap gap-4">
                <div className="w-full md:w-[180px]">
                  <Label className="mb-2">Category</Label>
                  <Select defaultValue={input.category} onValueChange={selectCategory}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a category" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel className="font-bold">Category</SelectLabel>
                        {[
                          "Next JS", "Data Science", "Frontend Development", "Backend Development",
                          "MERN Stack Development", "Javascript", "Python", "Docker", "MongoDB", "HTML"
                        ].map(category => (
                          <SelectItem key={category} value={category}>{category}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full md:w-[180px]">
                  <Label className="mb-2">Course Level</Label>
                  <Select defaultValue={input.courseLevel} onValueChange={selectCourseLevel}>
                    <SelectTrigger className="w-full">
                      <SelectValue placeholder="Select a course level" />
                    </SelectTrigger>
                    <SelectContent className="bg-white">
                      <SelectGroup>
                        <SelectLabel className="font-bold">Course Level</SelectLabel>
                        {["Beginner", "Medium", "Advance"].map(level => (
                          <SelectItem key={level} value={level}>{level}</SelectItem>
                        ))}
                      </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>

                <div className="w-full md:w-[180px]">
                  <Label className="mb-2">Price in (INR)</Label>
                  <Input
                    type="number"
                    name="coursePrice"
                    value={input.coursePrice}
                    onChange={changeEventHandler}
                    placeholder="199"
                    className="w-full"
                  />
                </div>
              </div>

              <div>
                <Label className="mb-2">Course Thumbnail</Label>
                <Input
                  id="file"
                  type="file"
                  onChange={selectThumbnail}
                  accept="image/*"
                  className="w-full md:w-fit"
                />
                {previewThumbnail && (
                  <img
                    src={previewThumbnail}
                    className="max-w-full md:w-64 my-2"
                    alt="Course Thumbnail"
                  />
                )}
              </div>

              <div className="flex flex-col sm:flex-row gap-2">
                <Button
                  className="bg-white text-black hover:bg-black hover:text-white w-full sm:w-auto"
                  onClick={() => navigate("/admin/course")}
                  variant="outline"
                >
                  Cancel
                </Button>
                <Button
                  className="bg-black text-white hover:bg-white hover:text-black w-full sm:w-auto"
                  disabled={loading}
                  onClick={updateCourseHandler}
                >
                  {loading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Please wait
                    </>
                  ) : (
                    "Save"
                  )}
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}

export default CourseTab
