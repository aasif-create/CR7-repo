function showClub(club){
    let text="";

    if(club==="sporting"){
        text="Sporting CP (2002–2003): Cristiano Ronaldo began his professional career in Portugal and gained attention with his skills.";
    }
    else if(club==="manutd"){
        text="Manchester United (2003–2009, 2021–2022): Won Premier League titles and his first Ballon d'Or.";
    }
    else if(club==="realmadrid"){
        text="Real Madrid (2009–2018): Became the club’s all-time top scorer and won multiple Champions League titles.";
    }
    else if(club==="juventus"){
        text="Juventus (2018–2021): Won Serie A titles and continued breaking goal records.";
    }
    else if(club==="alnassr"){
        text="Al Nassr (2023–Present): Leading football growth in Saudi Arabia with global impact.";
    }

    document.getElementById("details").innerText=text;
}
