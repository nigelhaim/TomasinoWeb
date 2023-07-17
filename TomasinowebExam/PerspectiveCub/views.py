from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse, HttpResponseRedirect 
from django.urls import reverse
from django.db import IntegrityError
from .models import User, Profile, posts
# Create your views here.
def index(request):
    return render(request, "PerspectiveCub/index.html")
#    return HttpResponse("Hello world")
def login_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        password = request.POST["password"]
        user = authenticate(request, username=username, password=password)

        if user is not None: 
            login(request,user)
            return HttpResponseRedirect(reverse("index"))
        else:
            return render(request, "network/login.html", {
                "message" : "Invalid log in credentials"
                })
    else:
        return render(request, "PerspectiveCub/login.html")

def logout_view(request):
    logout(request)
    return HttpResponseRedirect(reverse("index"))

def signup_view(request):
    if request.method == "POST":
        username = request.POST["username"]
        email = request.POST["email"]

        #Ensure password matches confirmation
        password = request.POST["password"]
        confirmation = request.POST["confirmation"]
        if password != confirmation:
            return render(request, "PerspectiveCub/signup.html", {
                "message" : "Passwords must match"
            })
        try:
            user = User.objects.create_user(username, email, password)
            profile = Profile.objects.create(user = user)
            user.save()
            profile.save()
        except IntegrityError:
            return render(request, "PerspectiveCub/signup.html", {
                "message" : "Username already taken"
                })
        login(request,user)
        return HttpResponseRedirect(reverse("index"))
    else:
        return render(request, "PerspectiveCub/signup.html")