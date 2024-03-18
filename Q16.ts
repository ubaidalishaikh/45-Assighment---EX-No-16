// EXERCISE NO:16

let guest_list: string[] = ['WASAY','UBAID','DANIYAL'];


// for (let index = 0; index < guest_list.length; index++) {
//     console.log('Respected Sir/Madam :'+guest_list[index]+'\n We invited you on dinner tommorow.\nThank You For Invite \n');
    
    
// }

let not_present: string = "WASAY";
let new_guest: string = 'HUZAIFA';

guest_list[0] = new_guest;

// for (let index = 0; index < guest_list.length; index++) {
//     console.log('Respected Sir/Madam :'+guest_list[index]+'\n We invited you on dinner tommorow.\n Thank You For Invite');
    
    
// }

guest_list.unshift("RONALDO" , "MESSI" , "NEYMAR");
for (let index = 0; index < guest_list.length; index++) {
    console.log('Respected Sir/Madam :'+guest_list[index]+'\n We invited you on dinner tommorow.Because I arranged a big table to decide a invite more 3 person:) \n Thank You For Invite');
    
    
}