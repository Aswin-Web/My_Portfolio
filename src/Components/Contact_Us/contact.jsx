import React from 'react'
import MarkEmailReadIcon from "@mui/icons-material/MarkEmailRead";  
import TtyIcon from "@mui/icons-material/Tty";          
import LocationOnIcon from "@mui/icons-material/LocationOn";                                                                                                                                                                          
const Contact = () => {
  return (
    <div>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-semibold border-b-2 pb-2 lg:mt-5 border-rose tracking-wider inline-block">
          {" "}
          Contact Us
        </h2>
        <div className="mt-4 flex justify-center gap-7">
          <div className="p-3 bg-cardColor inline-block tracking-wider ">
            <div className="flex bg-cardColor items-center">
              <TtyIcon className="bg-cardColor" />
              <h1 className="ml-3 text-lg bg-cardColor"> (+91) 9751759478</h1>
            </div>
          </div>
        </div>
        <div>
          <div className="mt-4 p-3 ml-2 bg-cardColor inline-block tracking-wider ">
            <div className="flex bg-cardColor items-center">
              <MarkEmailReadIcon className="bg-cardColor" />
              <h1 className="ml-3 text-lg bg-cardColor">
                ashvinachu097@gmail.com
              </h1>
            </div>
          </div>

          <div className="p-3 ml-3 mt-4 md:mt-1 bg-cardColor inline-block tracking-wider ">
            <div className="flex bg-cardColor items-center">
              <LocationOnIcon className="bg-cardColor" />
              <h1 className="ml-3 text-lg bg-cardColor">
                Coimbatore, TamilNadu
              </h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact
