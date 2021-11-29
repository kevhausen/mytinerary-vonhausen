const City = require("../models/City.js");
// backup
const citiesArray = [
  {
    name: "Paris",
    country: "France",
    image:
      "https://img.delicious.com.au/DGZCHR1s/del/2018/12/paris-france-97370-2.jpg",
    description:
      "History, culture, food and fashion in one picture-perfect city.",
  },
  {
    name: "New York",
    country: "USA",
    image:
      "https://img.delicious.com.au/ttEaxwsa/del/2018/12/new-york-usa-97371-2.jpg",
    description:
      "The ever-bustline Big Apple is a must-see for every traveller.",
  },
  {
    name: "Rome",
    country: "Italy",
    image:
      "https://img.delicious.com.au/BTJu9b76/del/2018/12/rome-italy-97372-2.jpg",
    description: "The eternal city is a heartland for food and history lovers.",
  },
  {
    name: "London",
    country: "UK",
    image:
      "https://img.delicious.com.au/ZOmI5Coz/del/2018/12/london-uk-97375-2.jpg",
    description: "An essential destination for every traveller’s bucket list.",
  },
  {
    name: "Tokyo",
    country: "Japan",
    image:
      "https://img.delicious.com.au/ErfAJ_zb/del/2018/12/tokyo-japan-97376-2.jpg",
    description: "The ultimate culture shock experience. ",
  },
  {
    name: "Lisbon",
    country: "Portugal",
    image:
      "https://img.delicious.com.au/-a6x6DpP/del/2018/12/lisbon-portugal-97377-2.jpg",
    description: "A photogenic European vacation.",
  },
  {
    name: "Barcelona",
    country: "Spain",
    image:
      "https://img.delicious.com.au/wvdCCshN/del/2018/12/barcelona-spain-97378-2.jpg",
    description: "An energetic Spanish city to explore.",
  },
  {
    name: "Honolulu",
    country: "Hawaii",
    image:
      "https://img.delicious.com.au/x0_XXdmh/del/2018/12/honolulu-hawaii-97380-2.jpg",
    description: "For a quintessential Hawaiian holiday.",
  },
  {
    name: "Istanbul",
    country: "Turkey",
    image:
      "https://img.delicious.com.au/WIXeICQZ/del/2018/12/istanbul-turkey-97382-2.jpg",
    description: "A place where the Middle East meets Asia.",
  },
  {
    name: "Bangkok",
    country: "Thailand",
    image:
      "https://img.delicious.com.au/QvcF4Hu0/del/2018/12/bangkok-thailand-97383-2.jpg",
    description: "Follow the scent of street food to this must-see city.",
  },
  {
    name: "Agra",
    country: "India",
    image:
      "https://img.delicious.com.au/2AHRryRu/del/2018/12/agra-india-97385-2.jpg",
    description: "See the Taj Mahal up-close in Agra.",
  },
  {
    name: "Cairo",
    country: "Egypt",
    image:
      "https://img.delicious.com.au/3M0FMB5C/del/2018/12/cairo-egypt-97390-2.jpg",
    description: "An iconic city where history abounds.",
  },
  {
    name: "Helsinki",
    country: "Finland",
    image:
      "https://img.delicious.com.au/zYT2qxH4/del/2018/12/helsinki-finland-97391-2.jpg",
    description: "A winter wonderland for the Christmas enthusiasts.",
  },
  {
    name: "Berlin",
    country: "Germany",
    image:
      "https://img.delicious.com.au/9Ow8JVHu/del/2018/12/berlin-germany-97393-2.jpg",
    description: "The ultimate noir experience for art lovers.",
  },
  {
    name: "Shanghai",
    country: "China",
    image:
      "https://img.delicious.com.au/1ri8bDOT/del/2018/12/shanghai-china-97394-2.jpg",
    description: "Food, fun and an active nightlife awaits.",
  },
];

const citiesControllers = {
  getAllCities: (req, res) => {
    City.find()
      .then((cities) => res.json({ response: { cities } }))
      .catch((err) => console.log(err));
  },
  getCarrouselCities: (req, res) => {
      City.find()
      .then(cities => {
        const carrouselCities = cities.slice(0, 12);
        res.json({ response: { carrouselCities } });
      })
      .catch((err) => console.log(err))
  },
  getCity: (req, res) => {
    City.findOne({ _id: req.params.id })
    .then((city) =>
      res.json({ response: { city } })
    )
    .catch((err) => console.log(err))
  },
  uploadCity: (req, res) => {
    const city = new City({
      name: req.body.name,
      country: req.body.country,
      image: req.body.image,
      description: req.body.description,
    });
    city
      .save()
      .then(() => res.json({ success: true }))
      .catch((err) => console.log(err));
  },
  deleteCity: (req, res) => {
      City.findOneAndDelete({_id:req.params.id})
      .then(()=> res.json({success:true}))
      .catch(err=> console.log(err))
  },
  modifyCity: (req, res) => {
      City.findOneAndUpdate({_id:req.params.id},{...req.body})
      .then( ()=>res.json({ response: true }))
      .catch(err=> console.log(err))
  }
};

module.exports = citiesControllers;
