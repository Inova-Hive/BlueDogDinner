import React from 'react'

const DividerImg: React.FC = () => {
  return (
    <div 
      className="relative bg-fixed bg-center bg-no-repeat bg-cover h-[500px]" data-cy='backgroundImageTwo'
      style={{
        backgroundImage: `url("https://storage.googleapis.com/bludogdiner_menuimages/BluDogContent/DJI_20230525_155238_23.jpg")`
      }}
    >
    </div>
  )
}

export default DividerImg
