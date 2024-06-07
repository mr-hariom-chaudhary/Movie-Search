let movies = [
    {
        Name : "Animal (2023)",
        Poster : "https://www.hindustantimes.com/ht-img/img/2023/09/26/original/Bobby_Deol_Animal_1695709343155.jpg",
        Rating : 6.8,
        Description : "A son's love for his father. Often away due to work the father is unable to comprehend the intensity of his son's love. Ironically, this fervent love and admiration for his father and family creates conflict between the father and...",
    },
    {
        Name : "KGF Chapter 2",
        Poster : "https://wallpapercave.com/wp/wp11435754.jpg",
        Rating : 8.3,
        Description : "In the blood-soaked Kolar Gold Fields, Rocky's name strikes fear into his foes, while the government sees him as a threat to law and order.",
    },
    {
        Name : "Jawan",
        Poster : "https://www.bollywoodhungama.com/wp-content/uploads/2023/08/Shah-Rukh-Khan-Vijay-Sethupathi-and-Nayanthara-take-center-stage-in-fiery-new-poster-of-Jawan.jpg",
        Rating : 7.0,
        Description : "Azad is the jailer of a women's prison in Mumbai who hijacks a Mumbai Metro train with a group of six inmates: Lakshmi, Eeram, Ishkra, Kalki, Helena and Janhvi.",
    },
    {
        Name : "Haddi",
        Poster : "https://m.media-amazon.com/images/M/MV5BMDQ4ZjllZTAtYTE3Zi00MWY5LWFjMWEtNWVlMTZkNDk3NDIzXkEyXkFqcGdeQXVyMTIyNzY0NTMx._V1_.jpg",
        Rating : 6.2,
        Description : "Nawazuddin Siddiqui attempts to imbue some heart in the role of a trans woman in this messy and grimy slasher Haddi.",
    },
    {
        Name : "The Nun 2",
        Poster : "https://i.pinimg.com/736x/45/8a/4e/458a4edbb2460ac02a9fa80e69e73bb2.jpg",
        Rating : 5.6,
        Description : "The Nun II” follows Sister Irene (Taissa Farmiga) five years after the first film's events. When she befriends Debra (Storm Reid), a newbie nun in a crisis of faith, they are put to the test after the Vatican demands Irene perform another miracle.",
    },
    {
        Name : "12th Fail",
        Poster : "https://popcornreviewss.com/wp-content/uploads/2023/10/Screenshot_20231030-143647_Letterboxd.jpg",
        Rating : 9.2,
        Description : "The film is based on Anurag Pathak's best-selling novel about the actual story of IPS officer Manoj Kumar Sharma. The movie delves into the relentless struggles of millions of students attempting the UPSC exams.",
    },
    {
        Name : "Tiger 3",
        Poster : "https://m.media-amazon.com/images/M/MV5BNTBmZjVlZjgtNzQ0Zi00NThlLTk2NTAtNWQxNmUwNGU0NjUzXkEyXkFqcGdeQXVyMTUzNTgzNzM0._V1_.jpg",
        Rating : 6.7,
        Description : "A sequel to Tiger Zinda Hai (2017), the film is set after the events of War (2019) and Pathaan (2023). In it, Tiger and Zoya set out to stop a rogue ISI agent who uses them to stage a coup against the Pakistani government.",
    },
    {
        Name : "Tu Jhooti Mai Makaar",
        Poster : "https://cdn.cinematerial.com/p/297x/dzcon4n0/tu-jhoothi-main-makkar-indian-movie-poster-md.jpg?v=1671568849",
        Rating : 6.0,
        Description : "Tu Jhoothi Main Makkaar is about a 'boy' and a 'girl' who fall in love only to realize that they want different things ...",
    },
    {
        Name : "Mission Raniganj",
        Poster : "https://assets-in.bmscdn.com/iedb/movies/images/mobile/thumbnail/xlarge/mission-raniganj-et00362090-1696831881.jpg",
        Rating : 7.3,
        Description : "Mission Raniganj is based on Jaswant Singh Gill, a brave and diligent mining engineer from IIT Dhanbad who rescued 65 trapped miners at the Raniganj Coalfields in 1989.",
    },
    {
        Name : "Pathaan",
        Poster : "https://m.media-amazon.com/images/M/MV5BZGI3NzQ5NTctZWQ4Ni00ZGJkLTg5N2UtYTBjNzcyN2EyOTM0XkEyXkFqcGdeQXVyOTI3MzI4MzA@._V1_.jpg",
        Rating : 7.3,
        Description : "Pathaan, an exiled RAW agent, works with ISI agent Rubina Mohsin to take down Jim, a former RAW agent, who plans to attack India with a deadly virus.",
    },
    {
        Name : "Salaar",
        Poster : "https://cdn.gulte.com/wp-content/uploads/2023/11/F-tQWpkWAAAU9aY-scaled.jpeg",
        Rating : 6.7,
        Description : "Salaar is an exciting action movie directed by Prashanth Neel and starring Prabhas and Shruti Haasan. The story follows Salaar, a strong and mysterious character with some complexity.",
    },
    {
        Name : "Dunki",
        Poster : "https://pbs.twimg.com/media/FSI1b0laUAAnSOZ?format=jpg&name=4096x4096",
        Rating : 7.6,
        Description : "In 2020, an elderly Manu Randhawa runs away from a hospital in London and meets immigration lawyer Puru Patel. She requests his assistance in connecting her with her ex-lover Hardayal 'Hardy' Singh Dhillon.",
    },
]

function searchMovie()
{
   let movieName = document.getElementById("search").value;
    if(movieName!="")
    {
        let result = movies.filter(function(movie)
        {
            return movie.Name.toUpperCase().includes(movieName.toUpperCase());
        })
        displayMovie(result);
    }
    else
    {
        displayMovie(movies);
    }

}

function displayMovie(data)
{
    document.getElementById("movies").innerHTML="";

    let htmlString = ``;

    for(let i=0;i<data.length;i++)
    {
        htmlString = htmlString + `
        <div class="movie">
        <div class="overlay">
            <div class="video">
            </div>3
            <div class="details">
                <h1>${data[i].Name}</h1>
                <h2>${data[i].Rating}</h2>
                <p>${data[i].Description}</p>
            </div>
        </div>
        <img class="poster" src="${data[i].Poster}" alt="Poster">
        </div>
        `
    }

    document.getElementById("movies").innerHTML=htmlString;
    console.log(htmlString);

};  

displayMovie(movies);
