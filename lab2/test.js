function testCounter(){
    console.log("counter test");
    for(let i=0;i<5;i++)
    {
        updateCounter();
    }
    console.log("counter value after test",document.getElementById("counter").innerText);
}