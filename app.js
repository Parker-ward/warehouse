let packages = [{
    priorityLevel: 'express',
    isFragile: false,
    weight: 2,
    to: 'Sir Harrington IV',
    trackingNumber: '1324kjs'
},
{
    priorityLevel: 'standard',
    isFragile: true,
    weight: .5,
    to: 'Master Mercutio',
    trackingNumber: '1325sdk'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: .5,
    to: 'Mistress Ravenfeather',
    trackingNumber: 'jffd147'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 4,
    to: 'B. Robert Brown',
    trackingNumber: 'acdc145'
},
{
    priorityLevel: 'express',
    isFragile: true,
    weight: 6,
    to: 'Chancellor Wallace',
    trackingNumber: '4b2l0z'
},
{
    priorityLevel: 'standard',
    isFragile: false,
    weight: 5,
    to: 'Sarah Sharm',
    trackingNumber: '8081baz'
},
{
    priorityLevel: 'free',
    isFragile: true,
    weight: 12,
    to: 'Tae Lien',
    trackingNumber: 'suz2367'
}]


function drawAllPackages(array) {
    let packagesElement = document.getElementById("allPackages")
    let allPackages = ''

    array.forEach(package => {
        allPackages += `<h2>${package.priorityLevel}</h2>`
    })

    packagesElement.innerHTML = allPackages
}

function filterPackagesByHeavy(){
    const lbs = packages.filter(p => p.weight <= 2)
    console.log(lbs);
    drawAllPackages(lbs)
}

function filterPackagesByLight(){
    const soft = packages.filter(packages => packages.weight > 2)
    drawAllPackages(soft)
}

function filterPackagesByPriority(){
    const highHopes = packages.filter(packages => packages.priorityLevel == 'free')
    drawAllPackages(highHopes)
}

function filterPackagesByFragile(){
    const breakable = packages.filter(packages => packages.isFragile == true)
    drawAllPackages(breakable)
}





drawAllPackages(packages)



