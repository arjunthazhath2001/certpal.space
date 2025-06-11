from django.db import models

# Create your models here.

class Industry(models.Model):
    id= models.UUIDField()
    name= models.CharField(max_length=100)
    

class Niche(models.Model):
    id= models.UUIDField()
    name= models.CharField(max_length=100)
    industry_id= models.ForeignKey(Industry, on_delete=models.CASCADE)
    total_no_of_certifications= models.IntegerField()


class Certifcations(models.Model):
    id= models.UUIDField()
    name= models.CharField(max_length=300)
    niche_id= models.ForeignKey(Niche,on_delete=models.CASCADE)
    website_link_url= models.URLField()
    certificate_logo= models.URLField() #s3 image url
    