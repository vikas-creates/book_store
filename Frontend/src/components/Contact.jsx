import { useState} from 'react'
import { useForm } from 'react-hook-form'
import axios from 'axios'
//import toast from 'react-hot-Toast'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Field, Label, Switch } from '@headlessui/react'

const Contact=()=> {
  const [agreed, setAgreed] = useState(false)

  const {
    register,
    handleSubmit,
    formState: {errors},

  }=useForm();

  //const onSubmit = (data)=>console.log(data);

  const onSubmit = async(data)=>{
    const contactInfo = {
        name: data.name,
        lName: data.lName,
        email: data.email,
        pNumber: data.pNumber,
        message: data.message,
    }
    await axios .post("http://localhost:4001/contact/contact",contactInfo)
    .then((res)=>{
        console.log(res.data)
        if(res.data){
            alert('Form submitted successfully');
        }
    }).catch((err)=>{
        if(err.response){
            console.log(err);
            alert("Error: "+ err.response.data.message);
        }
    })
  }

  return (
    <div className="isolate px-6 py-24 sm:py-32 lg:px-8">
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
      >
        <div
          style={{
            clipPath:
              'polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)',
          }}
          className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
        />
      </div>
      <div className="mx-auto max-w-2xl text-center ">
        <h2 className="text-3xl font-bold tracking-tight dark:text-white sm:text-4xl">Contact sales</h2>
        <p className="mt-2 text-lg leading-8 text-gray-300 dark:text-white">
          Aute magna irure deserunt veniam aliqua magna enim voluptate.
        </p>
      </div>
      <form onSubmit={handleSubmit(onSubmit)} className="mx-auto mt-16 max-w-xl sm:mt-20  dark:text-white">
        <div className="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
          <div>
            <label htmlFor="first-name" className="block text-sm dark:text-white font-semibold leading-6 text-gray-300">
              First name
            </label>
            <div className="mt-2.5">
              <input
                id="first-name"
                // name="first-name"
                type="text"
                autoComplete="given-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('name', {required: true})}
              />
              {errors.name && <span className='text-sm dark:text-white text-red-500'>Name is required</span>}
            </div>
          </div>
          <div>
            <label htmlFor="last-name" className="block text-sm dark:text-white font-semibold leading-6 text-gray-300">
              Last name
            </label>
            <div className="mt-2.5">
              <input
                id="last-name"
                // name="last-name"
                type="text"
                autoComplete="family-name"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('lName', {required: true})}
             />
            {errors.lastName && <span className='text-sm text-red-500 dark:text-white'>Last Name is required</span>}

            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="email" className="block text-sm dark:text-white font-semibold leading-6 text-gray-300">
              Email
            </label>
            <div className="mt-2.5">
              <input
                id="email"
                // name="email"
                type="email"
                autoComplete="email"
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('email', {required: true})}              
              />
             {errors.email && <span className='text-sm text-red-500'>Email is required</span>}

            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="phone-number" className="block text-sm dark:text-white font-semibold leading-6 text-gray-300">
              Phone number
            </label>
            <div className="relative mt-2.5">
              <div className="absolute inset-y-0 left-0 flex items-center">
                <label htmlFor="country" className="sr-only dark:text-white">
                  Country
                </label>
                <select
                  id="country"
                  // name="country"
                  className="h-full rounded-md border-0 bg-transparent bg-none dark:text-white py-0 pl-4 pr-9 text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm"
                >
                  <option>US</option>
                  <option>CA</option>
                  <option>EU</option>
                </select>
                <ChevronDownIcon
                  aria-hidden="true"
                  className="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                />
              </div>
              <input
                id="phone-number"
                // name="phone-number"
                type="tel"
                autoComplete="tel"
                className="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                {...register('pNumber', {required: true})}
              />
            {errors.pNumber && <span className='text-sm text-red-500 dark:text-white'>Phone Number is required</span>}

            </div>
          </div>
          <div className="sm:col-span-2">
            <label htmlFor="message" className="block text-sm dark:text-white font-semibold leading-6 text-gray-300">
              Message
            </label>
            <div className="mt-2.5">
              <textarea
                id="message"
                // name="message"
                rows={4}
                className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-300 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                defaultValue={''}
                {...register('message', {required: true})}
              />
            {errors.message && <span className='text-sm text-red-500 dark:text-white'>Message is required</span>}

            </div>
          </div>
          <Field className="flex gap-x-4 sm:col-span-2">
            <div className="flex h-6 items-center">
              <Switch
                checked={agreed}
                onChange={setAgreed}
                className="group flex w-8 flex-none cursor-pointer rounded-full bg-gray-200 p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 data-[checked]:bg-indigo-600"
              >
                <span className="sr-only dark:text-white">Agree to policies</span>
                <span
                  aria-hidden="true"
                  className="h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out group-data-[checked]:translate-x-3.5"
                />
              </Switch>
            </div>
            <Label className="text-sm leading-6 text-gray-600 dark:text-white">
              By selecting this, you agree to our{' '}
              <a href="#" className="font-semibold text-indigo-600 ">
                privacy&nbsp;policy
              </a>
              .
            </Label>
          </Field>
        </div>
        <div className="mt-10">
          <button
            type="submit"
            className="block w-full rounded-md bg-indigo-600 dark:text-white px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Let's talk
          </button>
        </div>
      </form>
    </div>
  )
}
export default Contact;