from django.shortcuts import render
from AppTwo.forms import UserInputForm

# Create your views here.
def index(request):
    my_dictionary = {'help_text':"Help Page"}
    return render(request, 'AppTwo/index.html', context = my_dictionary)

def users(request):
    form = UserInputForm()
    if request.method == 'POST':
        form = UserInputForm(request.POST)

        if form.is_valid():
            form.save(commit = True)
            return index(request)
        else:
            print("Error, form invalid")
    return render(request, 'AppTwo/users.html', {'form':form})
