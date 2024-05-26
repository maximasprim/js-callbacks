

// const callback = () =>{
//     function doHomework(subject ,callAlertFinished){
//         console.log( `started my ${subject}homework.`);
//         callAlertFinished();
//     }
//     function alertFinished(){
//         console.log('finished my homework');
//     }

//     doHomework("maths",alertFinished);
// }
// callback();


// const callback = () =>{
//     function goHome(transport, wentHome){
//         console.log(`please go home by ${transport} now.`);
//         wentHome();
//     }

//     function wentHomeAlready() {
//         console.log('Am home already');
//     }

//     goHome("matatu",wentHomeAlready);
// }

// callback();



// const callback = () =>{
//     function takeRest(hotel,goToHotel) {
//     console.log(`Please go and sleep at the ${hotel} before nightfall`);
//     goToHotel();
//     }
//     function alreadySlept(){
//         console.log('I have already gone to the hotel and am about to sleep');
//     }

//     takeRest("Roseworm",alreadySlept);
// }
// callback();

const callback = () =>{
    function bestHobby(hobby,myBestHobby) {
    console.log(`my best hobby is ${hobby} and that's what i enjoy doing`);
    myBestHobby();
    }

    function myOtherInterest(){
        console.log('my other intrest is in engineering');
    }

    bestHobby("coding",myOtherInterest);
}
callback();