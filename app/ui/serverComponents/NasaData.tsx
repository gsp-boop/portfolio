import Image from "next/image";

async function getNasaData() {
  const nasaData = await fetch(
    "https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5"
  );
  return await nasaData.json();
}

const NasaData = async () => {
  const nasaData = await getNasaData();
  const filteredData = nasaData.filter((obj: any) => {
    return obj.hasOwnProperty('title') && obj.hasOwnProperty('url') && obj.hasOwnProperty('copyright')
  }).map((obj: any) => {
    return {
        title: obj.title,

    }
  })
  const random = Math.floor(Math.random() * filteredData.length);
  console.log(filteredData)
  return (
    <>
      <div
        style={{
          position: "absolute",
          height: "100%",
          width: "100%",
          left: "0",
          top: "0",
        }}
      >
        <div className="bg-gradient-to-b from-base-200 h-20"></div>
        <Image
          alt="starry night"
          fill
          sizes="100vw"
          style={{ objectPosition: "center", objectFit: "cover" }}
          className="-z-10 opacity-30"
          src={nasaData[random].url}
        />
        <div className="absolute bottom-0 h-20 w-full bg-gradient-to-t from-base-200 "></div>
        <div className="absolute bottom-5 right-5 text-neutral">
            <p>{nasaData[random]?.copyright}</p>
            <p>{nasaData[random].title}</p>
        </div>
      </div>
    </>
  );
};

export default NasaData;
