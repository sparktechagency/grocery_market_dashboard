
import { Button } from "antd";
import JoditEditor from "jodit-react";
import { useEffect, useRef, useState } from "react";

import toast from "react-hot-toast";

import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import { useAboutSettingApiMutation, useGetAboutSettingApiQuery } from "../../redux/dashboardFeatures/setting/dashboardSettingApi";


const AboutUs = () => {
  const location = useLocation();
  const [content, setContent] = useState('');
  const editor = useRef(null);

  const [aboutSettingApi] = useAboutSettingApiMutation()
  const { data: privacyData } = useGetAboutSettingApiQuery();
  const aboutContent = privacyData?.data?.content;



  useEffect(() => {
    if (aboutContent) {
      setContent(aboutContent)
    }
  }, [aboutContent])



  const handleUpdate = async () => {
    const formData = new FormData();
    formData.append("content", content);


    //  formData.forEach((value, key) => {
    //   console.log(key, value);
    // });


    try {
      const res = await aboutSettingApi(formData).unwrap();
      console.log(res)
      if (res?.status === true) {
        toast.success(res?.message)
      }
    } catch (error) {
      console.log(error);
    }
  };


  useEffect(() => {
    document.title = "Dashboard About Us";
  }, [location.pathname]);

  return (
    <>
      <Helmet>
        <title>Dashboard About Us</title>
      </Helmet>

      <div className="w-full mt-6">
        <JoditEditor
          ref={editor}
          value={content}
          onChange={(newContent) => {
            setContent(newContent);
          }}
        />
      </div>

      <div className="flex justify-end ">
        <Button
          htmlType="submit"
          style={{ backgroundColor: "#0063E5", color: "white", fontFamily: "degularDisplay", padding: "24px 80px", fontSize: "16px", fontWeight: "bold", margin: "10px 0px" }}
          onClick={handleUpdate}
        >
          Save
        </Button>
      </div>

    </>
  )
}

export default AboutUs


