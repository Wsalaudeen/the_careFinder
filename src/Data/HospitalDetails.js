// export const hospitalDetails = [
//   {
//     id: 118836,
//     hospitalName: "Oyo mesi Health Centre",
//     hospitalImage:
//       "https://media.istockphoto.com/id/1432249453/photo/a-male-programmer-shows-a-female-colleague-a-coding-technique-the-codes-are-visible-on-the.jpg?s=612x612&w=is&k=20&c=vmc95VMacoArLbStnKZ2MLGIG3co7mu1ICkSf1xMSn4=",
//     hospitalProximity: "300 km away",
//     hospitalInfo:
//       " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
//     hospitalSocials: {
//       instagram: "https://www.instagram.com/example",
//       email: "mailto:example@example.com",
//       linkedin: "https://www.linkedin.com/example",
//     },
//   },
//   {
//     id: 933372,
//     hospitalName: "Lautech Teaching Hospital",
//     hospitalImage:
//       "https://media.istockphoto.com/id/1432249453/photo/a-male-programmer-shows-a-female-colleague-a-coding-technique-the-codes-are-visible-on-the.jpg?s=612x612&w=is&k=20&c=vmc95VMacoArLbStnKZ2MLGIG3co7mu1ICkSf1xMSn4=",
//     hospitalProximity: "355 km away",
//     hospitalInfo:
//       " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",

//     hospitalSocials: {
//       instagram: "https://www.instagram.com/example",
//       email: "mailto:example@example.com",
//       linkedin: "https://www.linkedin.com/example",
//     },
//   },

//   {
//     id: 938372,
//     hospitalName: "University College Hospital",
//     hospitalImage:
//       "https://media.istockphoto.com/id/1432249453/photo/a-male-programmer-shows-a-female-colleague-a-coding-technique-the-codes-are-visible-on-the.jpg?s=612x612&w=is&k=20&c=vmc95VMacoArLbStnKZ2MLGIG3co7mu1ICkSf1xMSn4=",
//     hospitalProximity: "57 km away",
//     hospitalInfo:
//       " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
//     hospitalSocials: {
//       instagram: "https://www.instagram.com/example",
//       email: "mailto:example@example.com",
//       linkedin: "https://www.linkedin.com/example",
//     },
//   },
//   {
//     id: 933772,
//     hospitalName: "Unilorin Teaching Hospital",
//     hospitalImage:
//       "https://media.istockphoto.com/id/1432249453/photo/a-male-programmer-shows-a-female-colleague-a-coding-technique-the-codes-are-visible-on-the.jpg?s=612x612&w=is&k=20&c=vmc95VMacoArLbStnKZ2MLGIG3co7mu1ICkSf1xMSn4=",
//     hospitalProximity: "957 km away",
//     hospitalInfo:
//       " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.",
//     hospitalSocials: {
//       instagram: "https://www.instagram.com/example",
//       email: "mailto:example@example.com",
//       linkedin: "https://www.linkedin.com/example",
//     },
//   },
//   {
//     id: 499476,
//     hospitalName: "Oyo State Hospital Management Board",
//     hospitalImage:
//       "https://media.istockphoto.com/id/1432257450/photo/a-smaller-group-of-new-programmers-learn-coding-programming-languages-and-computer-science.jpg?s=612x612&w=0&k=20&c=8tpt1mRL6HyORnh3IH7o3gd9JpwC6IXOqMtORPusIKc=",
//     hospitalProximity: "157 km away",
//     hospitalInfo:
//       " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the  ",
//     hospitalSocials: {
//       instagram: "https://www.instagram.com/example",
//       email: "mailto:example@example.com",
//       linkedin: "https://www.linkedin.com/example",
//     },
//   },
//   {
//     id: 499406,
//     hospitalName: "Osun State Hospital Manage,ent Board",
//     hospitalImage:
//       "https://media.istockphoto.com/id/1432257450/photo/a-smaller-group-of-new-programmers-learn-coding-programming-languages-and-computer-science.jpg?s=612x612&w=0&k=20&c=8tpt1mRL6HyORnh3IH7o3gd9JpwC6IXOqMtORPusIKc=",
//     hospitalProximity: "482 km away",
//     hospitalInfo:
//       " Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the",
//     hospitalSocials: {
//       instagram: "https://www.instagram.com/example",
//       email: "mailto:example@example.com",
//       linkedin: "https://www.linkedin.com/example",
//     },
//   },
// ];
import axios from "axios";
import { addDoc } from "firebase/firestore";
import { colRef } from "../firebase";

export const hospitalDetails = async (search) => {
  const searchParams = new URLSearchParams({
    near: search,
    categories: "15014",
    sort: "DISTANCE",
  });

  try {
    const response = await axios.get(
      `https://api.foursquare.com/v3/places/search?${searchParams}`,
      {
        headers: {
          "Content-Type": "application/json",
          Authorization: "fsq3FA7QflscbObtStave+ahS0AkHlDMgqJmuKajfb0vZ+I=",
        },
      }
    );
    console.log(response.data.results);
    response.data.results.forEach((result) => {
      try {
        addDoc(colRef, {
          name: result.name,
          distance: result.distance,
          location: result.location,
        });
      } catch (error) {
        console.error("data is not fetching:", error);
      }
    });
    return response.data.results;
  } catch (error) {
    console.error("data is not fetching:", error);
    throw error;
  }
};
