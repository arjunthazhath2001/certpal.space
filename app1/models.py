from django.db import models
import uuid

# Create your models here.
class Industry(models.Model):
    id= models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    industry_name= models.CharField(max_length=100)
    
    def __str__(self):
        return self.industry_name
    
    class Meta:
        db_table = 'industry'
        verbose_name_plural='Industries'
    

class Niche(models.Model):
    id= models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    niche_name= models.CharField(max_length=100)
    industry= models.ForeignKey(Industry, on_delete=models.CASCADE)

    
    def __str__(self):
        return self.niche_name
    
    class Meta:
        db_table = 'niche'
    

class Certification(models.Model):
    id= models.UUIDField(primary_key=True,default=uuid.uuid4,editable=False)
    certificate_name= models.CharField(max_length=300)
    niche= models.ForeignKey(Niche,on_delete=models.CASCADE)
    website_link_url= models.URLField() 
    certificate_logo= models.URLField() #s3 image url
    cost_of_exam= models.FloatField()
    difficulty_level= models.CharField(max_length=100)
    salary_hike= models.FloatField()
    pass_percent= models.FloatField()
    description= models.TextField()
    avg_prep_duration= models.FloatField()
    student_rating= models.FloatField()
    exam_duration= models.FloatField()
    issued_by= models.CharField(max_length=200)
    validity= models.IntegerField()
    exam_format= models.CharField(max_length=200)

    def __str__(self):
        return self.certificate_name
    
    class Meta:
        db_table = 'certification'


class CertificationCourse(models.Model):
    id= models.UUIDField(primary_key=True,default=uuid.uuid4, editable=False)
    certification= models.ForeignKey(Certification,on_delete=models.CASCADE)
    course_title= models.CharField(max_length=500)
    course_link= models.URLField()
    cost= models.FloatField()
    
    def __str__(self):
        return self.course_title    
    
    class Meta:
        db_table = 'course'
        
