from django.shortcuts import render
from django.contrib.auth import authenticate, login, logout
from django.http import HttpResponse
# Create your views here.
def index(request):
    return render(request, "PerspectiveCub/index.html")
#    return HttpResponse("Hello world")
