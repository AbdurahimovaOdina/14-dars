let kinolar = [
  {
    id: 1,
    title: "Beetlejuice",
    year: "1988",
    genres: ["Comedy", "Fantasy"],
    director: "Tim Burton",
    actors: "Alec Baldwin, Geena Davis, Annie McEnroe, Maurice Page",
    description:
      'A couple of recently deceased ghosts contract the services of a "bio-exorcist" in order to remove the obnoxious new owners of their house.',
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTUwODE3MDE0MV5BMl5BanBnXkFtZTgwNTk1MjI4MzE@._V1_SX300.jpg",
  },
  {
    id: 2,
    title: "The Cotton Club",
    year: "1984",
    genres: ["Crime", "Drama", "Music"],
    director: "Francis Ford Coppola",
    actors: "Richard Gere, Gregory Hines, Diane Lane, Lonette McKee",
    description:
      "The Cotton Club was a famous night club in Harlem. The story follows the people that visited the club, those that ran it, and is peppered with the Jazz music that made it so famous.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTU5ODAyNzA4OV5BMl5BanBnXkFtZTcwNzYwNTIzNA@@._V1_SX300.jpg",
  },
  {
    id: 3,
    title: "The Shawshank Redemption",
    year: "1994",
    genres: ["Crime", "Drama"],
    director: "Frank Darabont",
    actors: "Tim Robbins, Morgan Freeman, Bob Gunton, William Sadler",
    description:
      "Two imprisoned men bond over a number of years, finding solace and eventual redemption through acts of common decency.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BODU4MjU4NjIwNl5BMl5BanBnXkFtZTgwMDU2MjEyMDE@._V1_SX300.jpg",
  },
  {
    id: 4,
    title: "Crocodile Dundee",
    year: "1986",
    genres: ["Adventure", "Comedy"],
    director: "Peter Faiman",
    actors: "Paul Hogan, Linda Kozlowski, John Meillon, David Gulpilil",
    description:
      "An American reporter goes to the Australian outback to meet an eccentric crocodile poacher and invites him to New York City.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTg0MTU1MTg4NF5BMl5BanBnXkFtZTgwMDgzNzYxMTE@._V1_SX300.jpg",
  },
  {
    id: 5,
    title: "Valkyrie",
    year: "2008",
    genres: ["Drama", "History", "Thriller"],
    director: "Bryan Singer",
    actors: "Tom Cruise, Kenneth Branagh, Bill Nighy, Tom Wilkinson",
    description:
      "A dramatization of the 20 July assassination and political coup description by desperate renegade German Army officers against Hitler during World War II.",
    imageUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTg3Njc2ODEyN15BMl5BanBnXkFtZTcwNTAwMzc3NA@@._V1_SX300.jpg",
  },
  {
    id: 6,
    title: "Ratatouille",
    year: "2007",
    genres: ["Animation", "Comedy", "Family"],
    director: "Brad Bird, Jan Pinkava",
    actors: "Patton Oswalt, Ian Holm, Lou Romano, Brian Dennehy",
    description:
      "A rat who can cook makes an unusual alliance with a young kitchen worker at a famous restaurant.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMTMzODU0NTkxMF5BMl5BanBnXkFtZTcwMjQ4MzMzMw@@._V1_SX300.jpg",
  },
  {
    id: 7,
    title: "City of God",
    year: "2002",
    genres: ["Crime", "Drama"],
    director: "Fernando Meirelles, Kátia Lund",
    actors:
      "Alexandre Rodrigues, Leandro Firmino, Phellipe Haagensen, Douglas Silva",
    description:
      "Two boys growing up in a violent neighborhood of Rio de Janeiro take different paths: one becomes a photographer, the other a drug dealer.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjA4ODQ3ODkzNV5BMl5BanBnXkFtZTYwOTc4NDI3._V1_SX300.jpg",
  },
  {
    id: 8,
    title: "Memento",
    year: "2000",
    genres: ["Mystery", "Thriller"],
    director: "Christopher Nolan",
    actors: "Guy Pearce, Carrie-Anne Moss, Joe Pantoliano, Mark Boone Junior",
    description:
      "A man juggles searching for his wife's murderer and keeping his short-term memory loss from being an obstacle.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BNThiYjM3MzktMDg3Yy00ZWQ3LTk3YWEtN2M0YmNmNWEwYTE3XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg",
  },
  {
    id: 9,
    title: "The Intouchables",
    year: "2011",
    genres: ["Biography", "Comedy", "Drama"],
    director: "Olivier Nakache, Eric Toledano",
    actors: "François Cluzet, Omar Sy, Anne Le Ny, Audrey Fleurot",
    description:
      "After he becomes a quadriplegic from a paragliding accident, an aristocrat hires a young man from the projects to be his caregiver.",
    imageUrl:
      "http://ia.media-imdb.com/images/M/MV5BMTYxNDA3MDQwNl5BMl5BanBnXkFtZTcwNTU4Mzc1Nw@@._V1_SX300.jpg",
  },
  {
    id: 10,
    title: "Stardust",
    year: "2007",
    genres: ["Adventure", "Family", "Fantasy"],
    director: "Matthew Vaughn",
    actors: "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
    description:
      "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
    imageUrl:
      "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg",
  }
];



let listElement=document.querySelector(".list");
 function addData(kinolar){
    kinolar.map((item)=>{
        
            let liElement=document.createElement("li");
            liElement.classList.add("item");
            let imgElement=document.createElement("img");
            imgElement.classList.add("img")
            imgElement.src=`https://picsum.photos/250/250?random=${item.id}`;
            let h2Element=document.createElement("h2");
            h2Element.textContent=item.title;
            let h3Element=document.createElement("h3");
            h3Element.textContent=item.director;
            let pElement=document.createElement("p");
            pElement.textContent=item.genres;
            let p2Element=document.createElement("p");
            p2Element.textContent=item.year;
            let saveElement=document.createElement("button");
            saveElement.textContent="Save";
            saveElement.onclick=(e)=>upDateData(e,item.id,kinolar);
            let updateElement=document.createElement("button");
            updateElement.textContent="Update";
            updateElement.addEventListener("click",function(e){
                e.target.parentElement.parentElement.children[1].innerHTML=`<input value="${item.director}" type="text">`
                e.target.parentElement.parentElement.children[2].innerHTML=`<input value="${item.title}" type="text">`
                e.target.parentElement.parentElement.children[3].innerHTML=`<input value="${item.genres}" type="text">`
                e.target.parentElement.parentElement.children[4].innerHTML=`<input value="${item.year}" type="text">`
            })
            let deleteElement=document.createElement("button");
            deleteElement.textContent="Delete";
            deleteElement.addEventListener("click",function(e){
                kinolar=kinolar.filter((item)=>{
                    return item.year!==e.target.parentElement.parentElement.children[4].textContent;
                })
                listElement.innerHTML="";
                if(kinolar.length===0){
                    listElement.innerHTML="<b>No data</b>"
                }
                addData(kinolar);         
            });
            let divElement=document.createElement("div");
            divElement.append(saveElement,updateElement,deleteElement);
            liElement.append(imgElement,h2Element,h3Element,pElement,p2Element,divElement);
            listElement.append(liElement);
      })
 }
addData(kinolar)
let btn=document.querySelector(".btn");
function addElement(){
    let obj= {
      id: kinolar[kinolar.length-1].id+1,
      actors: "Ian McKellen, Bimbo Hart, Alastair MacIntosh, David Kelly",
      description:
          "In a countryside town bordering on a magical land, a young man makes a promise to his beloved that he'll retrieve a fallen star by venturing into the magical realm.",
      imageUrl:
          "https://images-na.ssl-images-amazon.com/images/M/MV5BMjkyMTE1OTYwNF5BMl5BanBnXkFtZTcwMDIxODYzMw@@._V1_SX300.jpg",
      };
    let wrapper=btn.parentElement;
    let title=wrapper.children[0].value;
    let director=wrapper.children[1].value;
    let genres=wrapper.children[2].value;
    let year=wrapper.children[3].value;
    obj.director=director;
    obj.title=title;
    obj.genres=genres;
    obj.year=year;
    kinolar.push(obj)
    listElement.innerHTML="";
    addData(kinolar)
    wrapper.children[0].value="";
    wrapper.children[1].value="";
    wrapper.children[2].value="";
    wrapper.children[3].value="";


}
function upDateData(e,id,kinolar){
  kinolar.map((item)=>{
    if(item.id===id){
      item.title=e.target.parentElement.parentElement.children[1].children[0].value;
      item.director=e.target.parentElement.parentElement.children[2].children[0].value;
      item.genres=e.target.parentElement.parentElement.children[3].children[0].value;
      item.year=e.target.parentElement.parentElement.children[4].children[0].value;
      console.log(e.target.parentElement.parentElement.children[1].children[0].value)
    }
  })
  e.target.parentElement.parentElement.children[1].innerHTML=e.target.parentElement.parentElement.children[1].children[0].value;
  e.target.parentElement.parentElement.children[2].innerHTML=e.target.parentElement.parentElement.children[2].children[0].value;
  e.target.parentElement.parentElement.children[3].innerHTML=e.target.parentElement.parentElement.children[3].children[0].value;
  e.target.parentElement.parentElement.children[4].innerHTML=e.target.parentElement.parentElement.children[4].children[0].value;
  
}
