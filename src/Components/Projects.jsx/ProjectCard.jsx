import React from 'react'
import FullscreenIcon from "@mui/icons-material/Fullscreen";
import CloudDoneIcon from '@mui/icons-material/CloudDone';
import GitHubIcon from '@mui/icons-material/GitHub';

const ProjectCard = () => {
  return (
    <div>
      {/* Card-Body */}
      <div className="mt-4 p-2 bg-cardColor inline-block rounded-lg border-2 border-rose">
        {/* Image */}
        <div className="inline-block">
          <img
            className="inline-block rounded-lg "
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6sv4tokbDlZpHYfb-X6QJQcwP221peTC14g&usqp=CAU"
            alt=""
          />
        </div>
        {/* Footer */}
        <div className="p-2 bg-cardColor">
          <div>
            <h1 className="text-lg font-semibold bg-cardColor">JourneyAnalytics.io</h1>
          </div>
          <div className="pt-1 flex justify-evenly bg-cardColor">
            <FullscreenIcon className='bg-cardColor'/>
            <CloudDoneIcon />
            <GitHubIcon />
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectCard
