
senator();
function senator(){
    
    var members=data.results[0].members;
    var table= document.getElementById("senate");

    var tbody = document.createElement("tbody")
    var thead=document.createElement("thead");
    
    var title1=document.createElement("th");
    thead.appendChild(title1);
    title1.textContent ="First Name";
    
    var title2=document.createElement("th");
    thead.appendChild(title2);
    title2.textContent ="Last Name";
    
    var title3=document.createElement("th");
    thead.appendChild(title3);
    title3.textContent ="Party";
    
    var title4=document.createElement("th");
    thead.appendChild(title4);
    title4.textContent ="State";
    
    var title5=document.createElement("th");
    thead.appendChild(title5);
    title5.textContent ="Seniority";
    
    var title6=document.createElement("th");
    thead.appendChild(title6);
    title6.textContent ="votes party %";
    
    table.appendChild(thead); 
         for(var i=0;i<members.length;i++){
             
                      var primertr =document.createElement("tr");
                      
                      var link =data.results[0].members[i].url;
                      var colname =  document.createElement("td");
                     
                      var link1=document.createElement("a");
                      link1.textContent =data.results[0].members[i].first_name;
                      link1.setAttribute( 'href', link);
                      link1.setAttribute( 'target', "_blank");
                      colname.appendChild(link1);
                      primertr.appendChild(colname);
    
                      
    
                      var collastname =  document.createElement("td");
                      primertr.appendChild(collastname);
                      collastname.textContent =data.results[0].members[i].last_name;
    
                      var colparty =  document.createElement("td");
                      primertr.appendChild(colparty);
                      colparty.textContent =data.results[0].members[i].party;
    
                      var colstate =  document.createElement("td");
                      primertr.appendChild(colstate);
                      colstate.textContent =data.results[0].members[i].state;
    
                      var colseniority =  document.createElement("td");
                      primertr.appendChild(colseniority);
                      colseniority.textContent =data.results[0].members[i].seniority;
    
                      var colporcentage =  document.createElement("td");
                      primertr.appendChild(colporcentage);
                      colporcentage.textContent =data.results[0].members[i].votes_with_party_pct;
    
                     tbody.appendChild(primertr);
                }
      table.appendChild(tbody);

}
