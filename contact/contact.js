/**
 * Created by adm_gcs on 6/30/2016.
 */



function facebookClicked(){
    document.getElementById('facebookIcon').classList.add('selected');
    document.getElementById('pinterestIcon').classList.remove('selected');
    document.getElementById('emailIcon').classList.remove('selected');
    document.getElementById('githubIcon').classList.remove('selected');
    document.getElementById('linkedInIcon').classList.remove('selected');

    document.getElementById('facebookSection').classList.add('selected');
    document.getElementById('pinterestSection').classList.remove('selected');
    document.getElementById('emailSection').classList.remove('selected');
    document.getElementById('githubSection').classList.remove('selected');
    document.getElementById('linkedInSection').classList.remove('selected');
}
function pinterestClicked(){
    document.getElementById('facebookIcon').classList.remove('selected');
    document.getElementById('pinterestIcon').classList.add('selected');
    document.getElementById('emailIcon').classList.remove('selected');
    document.getElementById('githubIcon').classList.remove('selected');
    document.getElementById('linkedInIcon').classList.remove('selected');

    document.getElementById('facebookSection').classList.remove('selected');
    document.getElementById('pinterestSection').classList.add('selected');
    document.getElementById('emailSection').classList.remove('selected');
    document.getElementById('githubSection').classList.remove('selected');
    document.getElementById('linkedInSection').classList.remove('selected');
}
function emailClicked(){
    document.getElementById('facebookIcon').classList.remove('selected');
    document.getElementById('pinterestIcon').classList.remove('selected');
    document.getElementById('emailIcon').classList.add('selected');
    document.getElementById('githubIcon').classList.remove('selected');
    document.getElementById('linkedInIcon').classList.remove('selected');

    document.getElementById('facebookSection').classList.remove('selected');
    document.getElementById('pinterestSection').classList.remove('selected');
    document.getElementById('emailSection').classList.add('selected');
    document.getElementById('githubSection').classList.remove('selected');
    document.getElementById('linkedInSection').classList.remove('selected');
}
function githubClicked(){
    document.getElementById('facebookIcon').classList.remove('selected');
    document.getElementById('pinterestIcon').classList.remove('selected');
    document.getElementById('emailIcon').classList.remove('selected');
    document.getElementById('githubIcon').classList.add('selected');
    document.getElementById('linkedInIcon').classList.remove('selected');

    document.getElementById('facebookSection').classList.remove('selected');
    document.getElementById('pinterestSection').classList.remove('selected');
    document.getElementById('emailSection').classList.remove('selected');
    document.getElementById('githubSection').classList.add('selected');
    document.getElementById('linkedInSection').classList.remove('selected');
}
function linkedInClicked(){
    document.getElementById('facebookIcon').classList.remove('selected');
    document.getElementById('pinterestIcon').classList.remove('selected');
    document.getElementById('emailIcon').classList.remove('selected');
    document.getElementById('githubIcon').classList.remove('selected');
    document.getElementById('linkedInIcon').classList.add('selected');

    document.getElementById('facebookSection').classList.remove('selected');
    document.getElementById('pinterestSection').classList.remove('selected');
    document.getElementById('emailSection').classList.remove('selected');
    document.getElementById('githubSection').classList.remove('selected');
    document.getElementById('linkedInSection').classList.add('selected');
}