export function filterData(searchInput, restaurantl){
    const vara = restaurantl.filter((val) => val?.data?.name?.toLowerCase().includes(searchInput.toLowerCase()));
    const vara4 = restaurantl.filter(function(val){
        return val.data.name.includes(searchInput);
    });
    console.log(vara4);
    return vara;
}
