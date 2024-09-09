document.getElementById('showVideos').addEventListener('click', function () {
    var videosSection = document.getElementById('videos');
    if (videosSection.style.display === 'none') {
        videosSection.style.display = 'block';
    } else {
        videosSection.style.display = 'none';
    }
});
