function disp_details(id:number, name:string, mail_id?:string): void {
    
    console.log("ID:", id);
    console.log("Name", name);

    if(mail_id != undefined){
        console.log("Emial Id", mail_id);
    }

    // parameter id can't used out function
}

disp_details(123, "John");
disp_details(111, "mary", "mary@xyz.com");