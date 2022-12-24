import React,{useState, useEffect} from 'react'
import FileBase from 'react-file-base64'
import {useDispatch} from 'react-redux'
import {createwPost, updatewPost} from '../../../actions/posts'
import { useSelector } from 'react-redux'

const FormWild = ({currentId,setCurrentId}) => {
  const [postData,setPostData] = useState({
      title:'',message:'',selectedFile:''
  })
  const post = useSelector((state)=> currentId ? state.wposts.find((p)=> p._id === currentId):null)
  const dispatch = useDispatch() 

  useEffect(()=>{
    if(post) setPostData(post)
  },[post])

  const handelSubmit=(e)=>{
      e.preventDefault()

        if(currentId){
            dispatch(updatewPost(currentId, postData))
        }
        else{
            dispatch(createwPost(postData))
        }
        clear()
  }

  const clear = () =>{
    setCurrentId(null)
    setPostData({
        title:'',message:'',selectedFile:''
    })
  }
return (
  <div>
      <div className='mx-auto px-4 py-16 bg-white text-black text-center w-full h-[100vh]'>
      <div>
          <h1 class="mb-20 mt-10 text-3xl font-extrabold text-gray-900 dark:text-white md:text-5xl lg:text-5xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-gray-600 from-gray-500">CREATE WILD</span> </h1>
      </div>
     
      <form autoComplete='off' noValidate onSubmit={handelSubmit}>
          <div className='lg:flex lg:justify-center'>
            <div className="shadow sm:overflow-hidden sm:rounded-md  xl:w-[700px] ">
              <div className="space-y-6 bg-gray-400 px-4 py-5 sm:p-6 ">
                <div className="grid grid-cols-3 gap-6">
                  <div className="col-span-3 sm:col-span-2"> 
                    <div>                     
                      <input
                        type="text"
                        name="company-website"
                        id="company-website"
                        className="block w-full flex-1 rounded border-white focus:border-white focus:ring-white sm:text-sm px-2 py-3"
                        placeholder="Title"
                        value={postData.title}
                        onChange={(e)=> setPostData({...postData, title: e.target.value})}
                        
                      />
                    </div>
                  </div>
                </div>
                <div>
                  <div className="mt-1">
                    <textarea
                      id="message"
                      name="message"
                      rows={3}
                      className="mt-1 block w-full rounded-md  border-white shadow-sm focus:border-white focus:ring-white sm:text-sm px-2 py-3"
                      placeholder="Discription"
                      defaultValue={''}
                      value={postData.message}
                      onChange={(e)=> setPostData({...postData, message: e.target.value})}
                      
                    />
                  </div> 
                </div>
              <div> 
              </div>
                <div>  
                  <div className="mt-1 flex justify-center rounded-md border-2 border-dashed border-white px-6 pt-5 pb-6">
                    <div className="space-y-1 text-center">
                      <svg
                        className="mx-auto h-12 w-12 text-black"
                        stroke="currentColor"
                        fill="none"
                        viewBox="0 0 48 48"
                        aria-hidden="true"
                      >
                        <path
                          d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                          strokeWidth={2}
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      <div className="flex text-sm text-black">
                        <label
                          htmlFor="file-upload"
                          className="relative cursor-pointer rounded-md bg-gray font-medium text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-red-500 focus-within:ring-offset-2 hover:text-red-500"
                        >
                         
                          <FileBase type='file' id="file_upload" name="file_upload" className="sr-only" 
                          onDone={({base64})=> setPostData({...postData,selectedFile: base64})}
                          />
                        </label>
                        <p className="pl-1">or drag and drop</p>
                      </div>
                      <p className="text-xs text-black">PNG, JPG, GIF up to 10MB</p>
                    </div>
                  </div>
                </div>
                <button class=" inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                
                >
                  <span class=" px-5 py-2.5 transition-all ease-in duration-75  rounded-md group-hover:bg-opacity-0">
                      {currentId ? 'Update' : 'Create'} Post
                  </span>
               </button>
              </div> 
              
            </div>
          </div>
          </form>
      </div>
      
     
  </div>
)
}

export default  FormWild 
