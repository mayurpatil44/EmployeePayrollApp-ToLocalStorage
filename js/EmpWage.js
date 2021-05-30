window.addEventListener('DOMContentLoaded', (event) => {
    const name = document.querySelector('#name');
    name.addEventListener('input', function() {
        if(name.value.length == 0) {
            setTextValue('.text-error', "");
            return;
        }
        try {
            (new EmployeePayRoll()).name = name.value;
            setTextValue('.text-error', "");
        } catch (e) {
            setTextValue('.text-error', e);
        }
    });
    const date = document.querySelector('#date');
    date.addEventListener('input', function() {
        let startDate = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
                      getInputValueById('#year') ;
        try {
            (new EmployeePayRoll()).startDate = new Date(Date.parse(startDate));
            setTextValue('.date-error', "");
        } catch (e) {
            setTextValue('.date-error', e);
        }
    });
    const salary = document.querySelector('#salary');
    setTextValue('.salary-output', salary.value);
    salary.addEventListener('input', function() {
        setTextValue('.salary-output', salary.value);
    });
});
const save = () => 
{ 
    try {
        let employeeObject = createEmployeePayroll(); 
        createAndUpdateStorage(employeeObject);     
        
    } catch (e) {
        return;
    }
} 
const createEmployeePayroll=()=>
{ 
    let employeePayrollData = new EmployeePayRoll();
    try 
    {
        employeePayrollData.name = getInputValueById('#name');
    }
    catch (e) 
    {
        setTextValue('.text-error', e);
        throw e;
    } 
            
    employeePayrollData.profilePic = getSelectedValues('[name=profile]').pop();
    employeePayrollData.gender = getSelectedValues('[name=gender]').pop(); 
    employeePayrollData.department = getSelectedValues('[name=department]');
    employeePayrollData.salary = getInputValueById('#salary');
    employeePayrollData.note = getInputValueById('#notes');
    let startDate = getInputValueById('#day')+" "+getInputValueById('#month')+" "+
                      getInputValueById('#year') ;
        try {
            (new EmployeePayrollData()).startDate = new Date(Date.parse(startDate));
            setTextValue('.date-error', "");
        } catch (e) {
            setTextValue('.date-error', e);
        }
    alert(employeePayrollData.toString());
    return employeePayrollData; 
}
const createAndUpdateStorage = (employee) => {
    let employeePayrollList = JSON.parse(localStorage.getItem("EmployeePayrollList"));
  if(employeePayrollList!=undefined){
      employeePayrollList.push(employee);
  }
  else{
      employeePayrollList=[employee];
  }
  alert(employeePayrollList.toString);
  localStorage.setItem("EmployeePayrollList",JSON.stringify(employeePayrollList));
}
           
    const getSelectedValues = (propertyValue) =>
    {
        let allItems = document.querySelectorAll(propertyValue); 
        let sellItems = [];
        allItems.forEach(item => 
        {
            if(item.checked) 
            sellItems.push(item.value);
        });
        return sellItems;
    }
            
    const getInputElementValue = (id) =>
    {
        let value = document.querySelector(id).value;
        return value; 
    }
    
    const getInputValueById=(id)=>
    {
        let value=document.querySelector(id).value;
        return value;
    }