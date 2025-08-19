import React, { useRef } from 'react'
import JoditEditor from "jodit-react";
const AboutUs = () => {
    const editor = useRef(null);
    return (
        <div className="min-h-screen bg-gray-100 p-6">
            <div className="bg-white rounded-lg shadow p-4 w-[90%] mx-auto">
                <div className="border-b pb-4 mb-4">
                    {/* Jodit Editor includes its own toolbar */}
                    <JoditEditor
                        ref={editor}
                        config={{
                            readonly: false,
                            toolbarAdaptive: false,
                            height: 700,
                            toolbarSticky: false,
                        }}
                    />
                </div>
                <div className="flex justify-end mt-4">
                    <button className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded">
                        Save
                    </button>
                </div>
            </div>
        </div>
    )
}

export default AboutUs






// import { Button } from "antd";
// import JoditEditor from "jodit-react";
// import { useEffect, useRef, useState } from "react";
// import { useGetSettingApiQuery, usePostSettingApiMutation } from "../../../../redux/dashboardFeatures/setting/dashboardSettingApi";
// import toast from "react-hot-toast";
// import { useLocation } from "react-router-dom";
// import { Helmet } from "react-helmet-async";


// const AboutUs = () => {
//   const location = useLocation();
//   const [content, setContent] = useState('');
//   const editor = useRef(null);

//   const [postSettingApi] = usePostSettingApiMutation()
//   const { data: privacyData } = useGetSettingApiQuery({ type: "Privacy Policy" });
//   const privaciAndPolicyData = privacyData?.data;
//   const privaciContent = privacyData?.data?.[0]?.text;


//   console.log(content)

//   useEffect(() => {
//     if (privaciContent) {
//       setContent(privaciContent)
//     }
//   }, [privaciContent])



//   const handleUpdate = async () => {
//     const formData = new FormData();
//     formData.append("type", "Privacy Policy");
//     formData.append("text", content);


//     //  formData.forEach((value, key) => {
//     //   console.log(key, value);
//     // });


//     try {
//       const res = await postSettingApi(formData).unwrap();
//       if (res?.status === true) {
//         toast.success(res?.message)
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };


//   useEffect(() => {
//     document.title = "FULL CIRCLE Detailing~Dashboard Privacy Policy";
//   }, [location.pathname]);

//   return (
//     <>
//         <Helmet>
//                 <title>FULL CIRCLE Detailing~Dashboard Privacy Policy</title>
//             </Helmet>
//       <div className="w-full mt-6">
//         <JoditEditor
//           ref={editor}
//           value={content}
//           onChange={(newContent) => {
//             setContent(newContent);
//           }}
//         />
//       </div>

//       <div className="flex justify-end ">
//         <Button
//           htmlType="submit"
//           style={{ backgroundColor: "#0063E5", color: "white", fontFamily: "degularDisplay", padding: "24px 80px", fontSize: "16px", fontWeight: "bold", margin: "10px 0px" }}
//           onClick={handleUpdate}
//         >
//           Save
//         </Button>
//       </div>

//     </>
//   )
// }

// export default AboutUs



