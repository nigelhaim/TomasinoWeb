from django.contrib import admin
from .models import User, Profile, posts, favorites 
# Register your models here.
admin.site.register(User)
admin.site.register(Profile)
admin.site.register(posts)
admin.site.register(favorites)
