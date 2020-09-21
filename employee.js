var employeePromise = d3.json("..employee.json")

var succFCN = function(employees)
{
    console.log("employees", employees);
    drawTable(employees);
}

var failFCN = function(err)
{
    console.error("did not find file")
}

employeePromise.then(succFCN, failFCN);

var drawTable = function(employees)
{
    var rows = d3.select("#employeesTable, tbody")
    .selectAll("tr")
    .data(employees)
    .enter()
    .append("tr")
    
    rows.append("td")
    .text (function(employees)
    {
        return employees.firstName
    });
    
    rows.append("td")
    .text(function(employees)
    {
          return employees.lastName});
    
    rows.append("td")
    .append("img")
    .attr("src", function(employees)
          {
        return employees.photo
    });
    
    rows.append("td")
    .text(function(employees)
          {
        return employees.title
    });
    
    rows.append("td")
    .text(function(employees)
    {
        return employees.unit
    });
    
    rows.append("td")
    .text(function(employees)
          {
        return employees.email
    });
    
    rows.append("td")
    .text(function(employees)
          {
        return employees.borderImageOutset});
    
    rows.append("td")
    .text(function(employees)
          {
        return employees.phone});
    }
 