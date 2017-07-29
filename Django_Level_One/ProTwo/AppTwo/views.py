from django.shortcuts import render
from django.http import HttpResponse
from AppTwo.models import User

# Create your views here.
def index(request):
    my_dictionary = {'help_text':"Help Page"}
    return render(request, 'AppTwo/index.html', context = my_dictionary)

def users(request):
    user_list = User.objects.order_by('first_name')
    users_dict = {'users':user_list}
    return render(request, 'AppTwo/users.html', context = users_dict)
