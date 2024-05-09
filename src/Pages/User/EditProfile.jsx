import toast from "react-hot-toast";
import { useDispatch, useSelector ,  } from "react-redux";
import { getUserData, updateProfile } from "../../Redux/Slices/AuthSlice";
import { useNavigate , Link  } from "react-router-dom";
import HomeLayout from "../../Layouts/HomeLayout";
import { useState } from "react";
import { BsPersonCircle } from "react-icons/bs";
import { AiOutlineArrowLeft } from "react-icons/ai";


function EditProfile(){
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [data,setData] = useState({
        previewImage:"",
        fullname:"",
        avatar:undefined,
        userId:useSelector((state)=>state?.auth?.data?._id)
    });

    function handleImageUpload(e){
        e.preventDefault();
        const uploadedImage = e.target.files[0];
        if(uploadedImage){
            const fileReader = new FileReader();
            fileReader.readAsDataURL(uploadedImage);
            fileReader.addEventListener("load",function(){
                setData({
                    ...data,
                    previewImage:this.result,
                    avatar:uploadedImage
                })
            })
        }
    }

    function handleInputChange(e){
        const {name,value}=e.target;
        setData({
            ...data,
            [name]:value
        })
    }

    async function onFormSubmit(e){
        e.preventDefault();
        if(!data.fullname || !data.avatar){
            toast.error("All fields are mandatory");
            return;
        }
        if(data.fullname.length<5){
            toast.error("Name can not be of less than 5 characters")
        }
        const formData = new FormData();
        formData.append("fullname",data.fullname);
        formData.append("avatar",data.avatar);

        await dispatch(updateProfile([data.userId, formData]));
        await dispatch(getUserData());

        navigate("/user/profile");
    }
    return (
        <HomeLayout>
            <div className=" flex items-center justify-center h-[100vh]">
                <form 
                    onSubmit={onFormSubmit}
                    className="flex flex-col justify-center gap-5 rounded-lg p-4 text-white w-80 min-h-[26rem] shadow-[0_0_10px_black]">
                    <h1 className=" text-center text-2xl font-semibold">Edit profile</h1>
                    <label htmlFor="image_uploads" className=" cursor-pointer">
                        {data.previewImage ? (
                            <img
                                className=" w-28 rounded-full m-auto"
                                src={data.previewImage}
                            />
                        ):(
                            <BsPersonCircle className=" w-28 h-28 rounded-full m-auto"/>
                        )}
                    </label>
                    <input 
                        type="file" 
                        name="image_uploads" 
                        id="image_uploads"
                        onChange={handleImageUpload}
                        accept=".jpg, .png, .svg, .jpeg"
                        className=" hidden"
                    />

                    <div className=" flex flex-col gap-1">
                        <label htmlFor="fullname">Full name</label>
                        <input 
                            type="text" 
                            name="fullname" 
                            id="fullname"
                            required
                            placeholder="Enter your name"
                            value={data.fullname}
                            className=" bg-transparent px-2 py-1 border"
                            onChange={handleInputChange} 
                        />
                    </div>
                    <button 
                        type="submit"
                        className=" w-full bg-yellow-600 hover:bg-yellow-500 transition-all ease-in-out duration-300 rounded-sm py-2 text-lg cursor-pointer font-semibold"
                    >
                        Update profile
                    </button>
                    <Link to = "/user/profile">
                        <p className=" link-accent cursor-pointer flex items-center justify-center w-full gap-2">
                            <AiOutlineArrowLeft/> Go back to profile

                        </p>
                    </Link>
                </form>
            </div>
        </HomeLayout>
    )
}

export default EditProfile;