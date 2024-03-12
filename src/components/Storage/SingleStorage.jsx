import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { fetchSingleStorageDataAPI } from "../../API/Storage";

import LOGO from "../../assets/LOGO.png";
import Heading from "../Common/Heading";
import f1 from "../../assets/f1.png";
import f2 from "../../assets/f2.png";
import f3 from "../../assets/f3.png";

export default function SingleStorage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [storageData, setStorageData] = useState(null);

  useEffect(() => {
    if (!storageData) {
      fetchSingleStorageDataAPI(id)
        .then((res) => {
          setStorageData(res);
        })
        .catch((err) => console.log(err))
        .finally(() => {});
    }
  }, []);

  if (!storageData) {
    return (
      <div className="flex flex-col items-center justify-center animate-pulse duration-50">
        <img src={LOGO} alt="Fasal Sathi Logo" />
        <span className="text-3xl font-semibold text-green-600">
          Loading...
        </span>
      </div>
    );
  }

  return (
    <div className="grid gap-4">
      <Heading>{storageData.name}</Heading>

      {/* IMAGE CONTAINER */}
      <div className="flex gap-4">
        <div className="rounded-md justify-center items-center overflow-hidden h-64 w-96 relative group">
          <img
            className="h-full w-full object-center object-cover "
            src={storageData.storage_image}
            alt="Image 3"
          />
          <div className="absolute text-sm h-full text-center bottom-0 left-0 right-0 bg-gray-800 bg-opacity-65 text-white p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <img src={f2} className="w-20 mx-auto invert mb-2" alt="" />
            <div className="grid gap-4">
              <div className="text-xl font-semibold">Security</div>
              <span>
                Safeguard your agricultural investments with our premier crop
                storage facilities. Equipped with cutting-edge technology and
                round-the-clock monitoring, we&rsquo;re committed to keeping
                your produce fresh and market-ready.
              </span>
            </div>
          </div>
        </div>
        <div className="rounded-md justify-center items-center overflow-hidden h-64 w-96 relative group">
          <img
            className="h-full w-full object-center object-cover "
            src={storageData.storage_image}
            alt="Image 3"
          />
          <div className="absolute text-sm h-full text-center bottom-0 left-0 right-0 bg-gray-800 bg-opacity-65 text-white p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <img src={f1} className="w-20 mx-auto invert mb-2" alt="" />
            <div className="grid gap-4">
              <div className="text-xl font-semibold">Reliability</div>
              <apan>
                Experience unmatched reliability in crop storage. Our facility
                offers ample space, hygienic conditions, and expert support to
                ensure your harvest stays in peak condition, ready to meet
                market demands.
              </apan>
            </div>
          </div>
        </div>
        <div className="rounded-md justify-center items-center overflow-hidden h-64 w-96 relative group">
          <img
            className="h-full w-full object-center object-cover "
            src={storageData.storage_image}
            alt="Image 3"
          />
          <div className="absolute text-sm h-full text-center bottom-0 left-0 right-0 bg-gray-800 bg-opacity-65 text-white p-2 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            <img src={f3} className="w-20 mx-auto invert mb-2" alt="" />
            <div className="grid gap-4">
              <div className="text-xl font-semibold">Climate Preservation</div>
              <span>
                Unlock the best storage solution for your crops! Our facility
                ensures optimal conditions with climate-controlled units,
                protecting your harvest from spoilage and preserving its
                quality.
              </span>
            </div>
          </div>
        </div>
      </div>

      <div>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3719.892935935585!2d81.30247487477365!3d21.196411682000207!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a293cfb6e41be65%3A0xf06e0bbccbc935ca!2sRaipur%20Naka%20Railway%20Crossing%2C%20SAF%20Lines%2C%20Katulbod%2C%20Durg%2C%20Bhilai%2C%20Chhattisgarh%20491001!5e0!3m2!1sen!2sin!4v1710268673893!5m2!1sen!2sin"
          //   width="600"
          //   height="450"
          allowfullscreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
}
