import React, { useState, useEffect } from "react";
import './seniorpages.css'

const DeziPage = () => {
  const pictures = [
    {
      id: 1,
      src: 'https://drive.google.com/uc?export=view&id=1-DsW4s2JOL-YKNuwWcVYe2o8gu81MzcS'
    },
    {
      id: 2,
      src: 'https://drive.google.com/uc?export=view&id=10mOJN2xPGvmoDVZ11MagFCIbnUHYiL2U'
    },
    {
      id: 3,
      src: 'https://drive.google.com/uc?export=view&id=166B7G5Yp0uowMgtq92XdtRMWrikxqtbT'
    },
    {
      id: 4,
      src: 'https://drive.google.com/uc?export=view&id=170oSoBarn9-BGxZelbKt2hznvdxK98gb'
    },
    {
      id: 5,
      src: 'https://drive.google.com/uc?export=view&id=1752r72cgRZHZvBdInhWTbjwS8r2G-uqK'
    },
    {
      id: 6,
      src: 'https://drive.google.com/uc?export=view&id=1A8XU0xzx-lg_9pnawrfYD5WMiFNvVdXU'
    },
    {
      id: 7,
      src: 'https://drive.google.com/uc?export=view&id=1AYuZRZbu_9JfReyre2kfS2-XCRlcOjQP'
    },
    {
      id: 8,
      src: 'https://drive.google.com/uc?export=view&id=1BDXW7MnEYJw9EuwKieQCQeGXuUdA_270'
    },
    {
      id: 9,
      src: 'https://drive.google.com/uc?export=view&id=1CbuVmtcHaTMptHIdpmkWoAM1i1PqD3ET'
    },
    {
      id: 10,
      src: 'https://drive.google.com/uc?export=view&id=1Cc5QSnkvrAkg6KXBuUwPY87eukXZZPiU'
    },
    {
      id: 11,
      src: 'https://drive.google.com/uc?export=view&id=1E04kEYYCYsSGDD14KgRt4Y3I8eZvB_Yr'
    },
    {
      id: 12,
      src: 'https://drive.google.com/uc?export=view&id=1F4AAUHJNBGJWvquMnHgkT74kNn4mk01Q'
    },
    {
      id: 13,
      src: 'https://drive.google.com/uc?export=view&id=1KtTRrOvCs2isFYZl1rONWa6pu2N-TZBn'
    },
    {
      id: 14,
      src: 'https://drive.google.com/uc?export=view&id=1ODG47PKtxSn2oruJOK0f0u-5-R07zzsu'
    },
    {
      id: 15,
      src: 'https://drive.google.com/uc?export=view&id=1S1C-t2cRPuAxUZamRXbzYS5BDHvFDWLj'
    },
    {
      id: 16,
      src: 'https://drive.google.com/uc?export=view&id=1SUX0-f5dd0UboHpa2wqAeRjlN3xW3jDd'
    },
    {
      id: 17,
      src: 'https://drive.google.com/uc?export=view&id=1UlMRZLT7nqn0MHP9xLBMn_NOF4FzmqbA'
    },
    {
      id: 18,
      src: 'https://drive.google.com/uc?export=view&id=1W3xDjXAVzIoQlm0Hy3uxErbdVivt1JXR'
    },
    {
      id: 19,
      src: 'https://drive.google.com/uc?export=view&id=1WJRfm_iiQjJ6qSm-i9Rog_3izVRZFVnK'
    },
    {
      id: 20,
      src: 'https://drive.google.com/uc?export=view&id=1_VpOxOdIGGybMqXw2jc7AyhyzGl5cocF'
    },
    {
      id: 21,
      src: 'https://drive.google.com/uc?export=view&id=1a6UrvnjtqblUhnrWvNNE__SLGir-9xn8'
    },
    {
      id: 22,
      src: 'https://drive.google.com/uc?export=view&id=1c4uXiA6XuB3Updf-rmI1z9-msmVHQqiK'
    },
    {
      id: 23,
      src: 'https://drive.google.com/uc?export=view&id=1cwLRx5KyW_44S0_i9m9-_rqubYgzbR2o'
    },
    {
      id: 24,
      src: 'https://drive.google.com/uc?export=view&id=1eeujYMhXemDLEcFWE2mugDyGSUNhrj2i'
    },
    {
      id: 25,
      src: 'https://drive.google.com/uc?export=view&id=1fZReT1pxL9Ave7GnwOHkIF4jHTqT4xcb'
    },
    {
      id: 26,
      src: 'https://drive.google.com/uc?export=view&id=1jA3MD3xQsr0p4A4Z4t0up8NOnuZHwgV0'
    },
    {
      id: 27,
      src: 'https://drive.google.com/uc?export=view&id=1jwHEt8q7WzQBzvLN-V0y-6KiqMjIX3sp'
    },
    {
      id: 28,
      src: 'https://drive.google.com/uc?export=view&id=1k2Stv4xs0N71_e7gC5cZY3YjPcW3T36z'
    },
    {
      id: 29,
      src: 'https://drive.google.com/uc?export=view&id=1nw08r7KBt46SmAf3VodvLPn8PBy9TOeL'
    },
    {
      id: 30,
      src: 'https://drive.google.com/uc?export=view&id=1qZ8Z-fg8IP2nhgjCeUs4XZbLhiSzV8Kg'
    },
    {
      id: 31,
      src: 'https://drive.google.com/uc?export=view&id=1rzGUFKkPxHo8e8eL3pJgT-TgDNmtvwGk'
    },
    {
      id: 32,
      src: 'https://drive.google.com/uc?export=view&id=1sjtV_ren4eloIIR7p8LodLBg5-uMxC7E'
    },
    {
      id: 33,
      src: 'https://drive.google.com/uc?export=view&id=1vfBQF4Nugfz907XyHvsNt_gxVxgd71ZK'
    },
    {
      id: 34,
      src: 'https://drive.google.com/uc?export=view&id=1wxdlRKAC3TwOtdoygaMBRLiwHAm4Mx9w'
    },
    {
      id: 35,
      src: 'https://drive.google.com/uc?export=view&id=1x91pWQ69hLZ-AQfjx1UuF3VBiYPfm9yD'
    },
    {
      id: 36,
      src: 'https://drive.google.com/uc?export=view&id=1xim19iie__WmOv3fPaDgPuv9Yzyys6h1'
    },
    {
      id: 37,
      src: 'https://drive.google.com/uc?export=view&id=1yzHdcpHv9bhe4bU_cDaF2UdsCtdDzWpd'
    }
  ]

  const [loadingPictures, setLoadingPictures] = useState(new Set(pictures.map(picture => picture.id)));

  const handleImageLoad = (id) => {
    setLoadingPictures(prevLoadingPictures => {
      const newLoadingPictures = new Set(prevLoadingPictures);
      newLoadingPictures.delete(id);
      return newLoadingPictures;
    });
  };

  const handleImageError = (id) => {
    console.error(`Error loading image ${id}`);
    setLoadingPictures(prevLoadingPictures => {
      const newLoadingPictures = new Set(prevLoadingPictures);
      newLoadingPictures.delete(id);
      return newLoadingPictures;
    });
  };

  return (
    <div>
      <div className="picture-container">
        {Array.from(loadingPictures).map(id => (
          <div key={id} className="picture-wrapper">
            <div className="loading-icon">Loading...</div>
          </div>
        ))}
        {pictures.map(picture => (
          <div key={picture.id} className="picture-wrapper">
            <img
              src={picture.src}
              alt={picture.id}
              onLoad={() => handleImageLoad(picture.id)}
              onError={() => handleImageError(picture.id)}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DeziPage;

