let row={
    sNo:1,
    fName:'Avais',
    lName:'Ansari',
    city:'Bhiwandi',
    country:'India'
}

let record=[row]


function recordLoad(){
    document.getElementById('row').innerHTML=''
    document.getElementById('newSno').innerHTML=record.length+1
    for(var i=0;i<record.length;i++){
        let elem=document.createElement('div')
        elem.setAttribute('id',record[i].sNo)
        elem.setAttribute('style','display:flex;border-bottom:1px solid #f2f2f2;padding:10px 0px')
        let sNo=document.createElement('div')
        let fName=document.createElement('div')
        let lName=document.createElement('div')
        let city=document.createElement('div')
        let country=document.createElement('div')

        sNo.setAttribute('style','width:20%')
        fName.setAttribute('style','width:20%')
        lName.setAttribute('style','width:20%')
        city.setAttribute('style','width:20%')
        country.setAttribute('style','width:20%')
        
        sNo.innerHTML=i+1
        fName.innerHTML=record[i].fName
        lName.innerHTML=record[i].lName
        city.innerHTML=record[i].city
        country.innerHTML=record[i].country

        elem.appendChild(sNo)
        elem.appendChild(fName)
        elem.appendChild(lName)
        elem.appendChild(city)
        elem.appendChild(country)


        document.getElementById('row').appendChild(elem)
    }
}

function addTop(){
    const row={
        fName:document.getElementById('newFname').value,
        lName:document.getElementById('newLname').value,
        city:document.getElementById('newcity').value,
        country:document.getElementById('newcountry').value

    }
    if(row.fName!=='' && row.lName!=='' && row.city!=='' && row.country!=='') {
        record.splice(0,0,row)
        recordLoad()
    }
    else{
        alert('Enter all details')
    }
    console.log(record)
}

function addBottom(){
    const row={
        fName:document.getElementById('newFname').value,
        lName:document.getElementById('newLname').value,
        city:document.getElementById('newcity').value,
        country:document.getElementById('newcountry').value

    }
    if(row.fName!=='' && row.lName!=='' && row.city!=='' && row.country!=='') {
        record.push(row)
        recordLoad()
    }
    else{
        alert('Enter all details')
    }
    console.log(record)
}