

const mongoose = require('mongoose');

const main = async () => {
    await mongoose.connect('mongodb://localhost:27017/student');
    const schema = new mongoose.Schema({ name: String ,mobile:Number});
    const p2 = mongoose.model('personal_details', schema);
    //let d = new p2({ name: 'ram' ,mobile: 9876543210,age:18});
    //let r = await d.save();
    //console.log(r);
};

main();
