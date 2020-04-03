$(document).ready(function () {
    // need to have search <input> in html
    // that will be wrapped in <form >
    // create jquery .on('submit')
    // grab the users input with $(this).val()
    // use $.ajax(zomatoApiUrl)
    // 'https://api.zomato.com/restaurant/search?name=mcdonalds&zipCode=32803'
    //.then() handle the data that comes back

    $(document).on("click", "button.delete", deleteRestaurant);

    function deleteRestaurant(event) {
        event.stopPropagation();
        var id = $(this).data("id");
        console.log(id);
        console.log(typeof id)
        $.ajax({
            method: "DELETE",
            url: "/api/restaurant/" + id
        }).then(function () {
            location.reload();
        })
    }
    $(document).on("click", "button.post", deleteRestaurant);
    function newRestaurant(event) {
        event.stopPropagation();
        var id = $(this).data("id");
        console.log(id);
        console.log(typeof id)
        $.ajax({
            method: "post",
            url: "/api/restaurant/" + id
            // data: {dataFromSomewhere}
        }).then(function () {
            location.reload();
        })
    }
});