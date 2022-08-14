function my_Dictionary_Function(){//Cat Dictionary
    var Animal = {
        Species:"Cat",
        Color:"Gray",
        Breed:"Maine Coon",
        Age:11,
        Sound:"Meow!"
    };
    delete Animal.Sound;
    document.getElementById("Dictionary").innerHTML=Animal.Sound;
}

