// this is the main file that will be used to render the page
import Link from 'next/link';

export default function Home() {

  return (
    <div className=" ">
      <div className="flex flex-col items-center justify-center min-h-screen py-2">
        <h1 className="font-bold text-4xl"> Welcome to Caht Page</h1>
        <div className="flex flex-col items-center justify-center mt-10">

  <div className='flex flex-row mt-15 space-x-12'>
    <Link className='bg-red-300 p-2 border rounded' href={'/'}>Home</Link>

  </div>
</div>
      </div>

    </div>
  );
}
