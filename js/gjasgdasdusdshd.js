/** Logic to display none .main-container and display block .expired-body */
$(document).ready(function() {
    // Get the current date
    const currentDate = new Date();
    const currentMonth = currentDate.getMonth();
    const currentYear = currentDate.getFullYear();

    // Get the last day of the current month
    const lastDay = new Date(currentYear, currentMonth + 1, 0).getDate();

    // Calculate remaining days
    const currentDateNumber = currentDate.getDate();
    const remainingDays = lastDay - currentDateNumber;

    //Remaining Days NOTICE 
    // Display the remaining days or an appropriate message
    if (remainingDays > 0) {
        $('#remainingDays').text(`Days remaining: ${remainingDays} Days left to expire your Web hosting Server. Please pay the due at the earliest!`);
    } else if (remainingDays === 0) {
        $('#remainingDays').text('Your Plan EXPIRED ! To continue your Web hosting Server. Please pay the due at the earliest!');
    } else {
        $('#remainingDays').text('Youe Plan Expired .Please pay the due at the earliest! to resume your Plan');
    }

    // Check if the remaining days are less than or equal to 0
    if (remainingDays <= 0) {
        $('.main-container').css('display', 'none');
        $('marquee-container').css('display', 'none');
        $('.expired-body').css('display', 'block');
    }
    // Uncomment the else block to Resume the Service
    else {
        $('.main-container').css('display', 'block');
        $('.marquee-container').css('display', 'block');
        $('.expired-body').css('display', 'none');
    }
    //Force Expired True to OFF the service
    const forceExpired = false; //Default false
    if(forceExpired){
        $('.main-container').css('display', 'none');
        $('.marquee-container').css('display', 'none');
        $('.expired-body').css('display', 'block');
    }
    //ForceResume true to resume ON the service
    const forceResume = false; //Default false
    if(forceResume){
        $('.main-container').css('display', 'block');
        $('.marquee-container').css('display', 'block');
        $('.expired-body').css('display', 'none');
    };
});