const zoom = {
    monday: [
        {
            endTime: 950,
            url: "https://zoom.us/meeting/register/tJAod-uoqTgiHNNuEzs_PIPwu1U4sLRCE-9D"
        },
        {
            endTime: 1050,
            url: "https://zoom.us/meeting/register/tJAod-uoqTgiHNNuEzs_PIPwu1U4sLRCE-9D"
        },
        {
            endTime: 1150,
            url: "https://zoom.us/j/2319763386?pwd=N0d0eEFwTXlib3hseitnNUZoVWhqdz09"
        }
    ],
    tuesday: [
        {
            endTime: 950,
            url: ""
        },
        {
            endTime: 1050,
            url: ""
        },
        {
            endTime: 1150,
            url: "https://zoom.us/meeting/register/tJAod-uoqTgiHNNuEzs_PIPwu1U4sLRCE-9D"
        },
        {
            endTime: 1550,
            url: ""
        },
        {
            endTime: 1650,
            url: ""
        }
    ],
    wednesday: [
        {
            endTime: 950,
            url: "https://zoom.us/j/93785999668?pwd=R3VHaU5lbTREOVNHOWNhNmZ1dC9FQT09"
        },
        {
            endTime: 1050,
            url: "https://zoom.us/j/2319763386?pwd=N0d0eEFwTXlib3hseitnNUZoVWhqdz09"
        },
        {
            endTime: 1150,
            url: "https://zoom.us/j/2319763386?pwd=N0d0eEFwTXlib3hseitnNUZoVWhqdz09"
        },
        {
            endTime: 1550,
            url: ""
        },
        {
            endTime: 1650,
            url: ""
        }
    ],
    thursday: [
        {
            endTime: 950,
            url: ""
        },
        {
            endTime: 1050,
            url: ""
        },
        {
            endTime: 1150,
            url: ""
        },
        {
            endTime: 1550,
            url: ""
        },
        {
            endTime: 1650,
            url: ""
        }
    ],
    friday: [
        {
            endTime: 950,
            url: ""
        },
        {
            endTime: 1050,
            url: "https://zoom.us/j/93785999668?pwd=R3VHaU5lbTREOVNHOWNhNmZ1dC9FQT09"
        },
        {
            endTime: 1150,
            url: "https://zoom.us/j/93785999668?pwd=R3VHaU5lbTREOVNHOWNhNmZ1dC9FQT09"
        }
    ],
}

var today = new Date();
var date = today.getMonth()+1 + "/" + today.getDate() + "/" + today.getFullYear();
var time = today.getHours() + "";
time += (today.getMinutes()+"").length === 1 ? "0"+today.getMinutes() : today.getMinutes();

function getDayName(dateStr, locale)
{
    var date = new Date(dateStr);
    return date.toLocaleDateString(locale, { weekday: 'long' });
}

var day = getDayName(date, "en-US").toLocaleLowerCase();

var url = null;

zoom[day].map(item => {
    if(item.endTime - parseInt(time) >0 && item.endTime - parseInt(time) <= 100 && url === null){
        console.log("şu anki dersin: " + item.url)
        url = item.url;
    }
})

const warningText = (url === null) ? "You have not any lesson right now" : "You are directing now... Please wait..."

document.getElementById("mainText").innerText = warningText

if(url !== null) window.location.replace(url);
