import MainSlider from "@/components/MainSlider/MainSlider";
import DefaultLayout from "@/layouts/DefaultLayout";
const slides = [
  'https://via.placeholder.com/800x400/FF0000/FFFFFF',
  'https://via.placeholder.com/800x400/00FF00/FFFFFF',
  'https://via.placeholder.com/800x400/0000FF/FFFFFF',
];
export default function Home() {
  return (
    <>
      <div>
        <DefaultLayout >
           <MainSlider slides={slides}/> 
        </DefaultLayout>
      </div>
    </>
  )
}
