from django import template

register = template.Library()

@register.filter(name='cut_a')
def cut_a(value, arg):
    """
    This cuts out all values of "arg" from string!
    """
    return value.replace(arg, '')
