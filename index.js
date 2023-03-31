// document.addEventListener();

window.addEventListener("load", (event) => {
    console.log("load");
  });


//   async function getData() {
//     const data = fetch("https://xlri.edu/api/xol/sample")
//     .then(res => res.json());

//     console.log(data);

    // const collection = document.getElementsByClassName("details").innerHTML = data;
//   }

  const data = fetch("https://xlri.edu/api/xol/sample")
  .then(res => res.json());

  console.log(data);

  document.getElementsByClassName("details").innerHTML += "<p>{data}</p>";

//   getData();



//   const collection = document.getElementsByClassName("details").innerHTML = data;
