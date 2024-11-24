from django.urls import path, include
from rest_framework import routers
from tareas import views
from rest_framework.documentation import include_docs_urls
from drf_yasg.views import get_schema_view
from drf_yasg import openapi

schema_view = get_schema_view(
   openapi.Info(
      title="API Tareas",
      default_version='v1',
      description="Documentacion API Tareas",
      terms_of_service="https://www.google.com/policies/terms/",
      contact=openapi.Contact(email="forissimartin.dev@gmail.com"),
      license=openapi.License(name="BSD License"),
   ),
   public=True,
   #permission_classes=(permissions.AllowAny,),
)

router = routers.DefaultRouter()
router.register(r'tareas', views.TaskView, 'tareas')

urlpatterns = [
    path("api/v1/", include(router.urls)),
    path('coreapi_docs/', include_docs_urls(title="API Tareas")),
    path('swagger_docs/', schema_view.with_ui('swagger', cache_timeout=0), name='schema-swagger-ui'),
    path('redoc_docs/', schema_view.with_ui('redoc', cache_timeout=0), name='schema-redoc'),
]