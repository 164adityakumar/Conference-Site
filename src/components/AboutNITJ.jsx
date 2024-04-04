import Separator from "./common/Separator";

function AboutNITJ() {



    return (
        <div className="container flex flex-col items-center lg:flex-row lg:justify-between lg:items-start max-w-7xl  px-4 sm:px-10  lg:px-8 mx-auto pt-20">
            <div className="w-full md:w-[700px] px-4 lg:w-3/5 lg:max-w-full">
                <h2 className="text-4xl font-sans font-bold text-gray-950  ">
                    About NITJ        </h2>
                <Separator />
                <p className="text-base text-justify font-sans font-base min-h-[216px] text-gray-800">
                Dr B R Ambedkar National Institute of Technology, Jalandhar was established in the year 1987 as Regional Engineering College. The Institute was given the status of National Institute of Technology  by the Government of India on October 17, 2002 under the aegis of Ministry of Human Resource Development, New Delhi and has been declared as “Institute of National Importance” under the act of Parliament-2007. As National Institute of Technology, the Institute has a responsibility of providing high quality technical education in Engineering/Technology and Sciences to produce competent technical manpower and scientists  for the country..
                </p>

            </div>
            <div className="w-full md:w-[700px] lg:w-2/5 lg:max-w-[450px] px-4 mt-10 lg:mt-0 mx-auto lg:px-5 ">
            
                <h2 className="text-4xl font-sans font-bold  text-gray-950  ">
                    About the Department
                </h2>
                <Separator />
                <p className="text-base  text-justify font-sans font-base text-gray-800">
                    The Department (FIST Sponsored) was established in 1990 and
                    has been playing a vital role in the development of Chemical
                    Engineering education and research by offering B. Tech, M. Tech
                    and PhD programmes. Its Alumni are occupying eminent positions
                    in chemical industries, research and academic institutions in India
                    and abroad. The Department has established state of the art
                    laboratories with sophisticated equipment for undergraduate
                    courses and research work.
                </p>
            </div>
        </div>
    );
}

export default AboutNITJ;
