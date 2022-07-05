const section_story = document.getElementById("story");
const last_story = document.getElementById("lastStory");
const access_token = "EAAJZB3QISeZBkBABDsCrq6bTikDf9sJD8310kjS1T0lHi9XdZAKbYx1SXWOmbZA4EH256aNDrI7p4igZB0brmvsnpr3tEJ3dQmZA1ncES64I0AbVAWaxD6ufVf13rGZAZCzmp8xmxsFaWS5CTaQg3Qly1RX9j8mzd5NhE0qNiEHbhZCQB2s4lKZBj3";
fetch("https://graph.facebook.com/v14.0/17841439043580057/stories?access_token="+access_token)
.then(response => response.json())
.then(result => {
    // console.log(result);
    for (let i = 0; i < result.data.length; i++) {
    let id_story = result.data[i].id
    fetch("https://graph.facebook.com/v14.0/"+id_story+"?fields=id%2Cig_id%2Cmedia_product_type%2Cmedia_type%2Cmedia_url%2Cowner%2Cpermalink%2Cshortcode%2Ctimestamp%2Cusername&access_token="+access_token)
    .then(response => response.json())
    .then(data_story => {
    // console.log(data_story);
    let content =
        '<a href="'+data_story.permalink+'" class="cardStory rainbow-box ms-2" target="_blank">' +
        '<div class="cardStoryBg">' +
            '<img src="'+data_story.media_url+'" alt="cardStoryImg">' +
        '</div>'+
        '</a>';
    $(content).insertBefore("#lastStory");
    });
    }
});