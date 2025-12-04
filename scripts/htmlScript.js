function characterRoleOptions(selectedOption) {
    //  Based on role selection, a description will be provided to the user
    let msg= "";
    const characterRole= selectedOption;
    console.log(characterRole);

    switch(selectedOption) {
        case 'fighter':
           msg= "Fighters are versatile in many forms of martial weapons and armors. The fighter specializes in kicking butt and taking names.";
           break;
        case 'knight':
            msg= "The knight is loyal, noble, and driven by courage. The focus of the knight is justice honor and protecting the weak.";
            break;
        case 'sage':
            msg= "The sage possesses profound knowledge and expertise in various fields of study.";
            break;
        case 'witch':
            msg= "The witch will cast spells, brew potions, and use magical abilities to unleash powerfull attacks.";
            break;
        case 'minstrel':
            msg= "The minstrel often serves as a healer, handling most ranged weapons with expertise and finesse.";
            break;
        case 'mystic':
            msg= "The mystic is a master in illusion and manipulation, confusing their foes minds bending reality and fantasy.";
            break;
        default:
            console.log("No character role selected.");
    }
    console.log(msg);
    document.getElementById("roleDescription").innerText= msg;
}