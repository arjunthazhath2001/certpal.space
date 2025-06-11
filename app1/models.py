from django.db import models

# Create your models here.

class Industry(models.Model):
    id= models.UUIDField()
    industry_name= models.CharField(max_length=100)
    
    def __str__(self):
        return self.industry_name
    
    class Meta:
        db_table = 'industry'
    

class Niche(models.Model):
    id= models.UUIDField()
    niche_name= models.CharField(max_length=100)
    industry_id= models.ForeignKey(Industry, on_delete=models.CASCADE)
    total_no_of_certifications= models.IntegerField()
    
    def __str__(self):
        return self.niche_name
    
    class Meta:
        db_table = 'niche'
    

class Certifications(models.Model):
    id= models.UUIDField()
    certificate_name= models.CharField(max_length=300)
    niche_id= models.ForeignKey(Niche,on_delete=models.CASCADE)
    website_link_url= models.URLField() 
    certificate_logo= models.URLField() #s3 image url
    cost_of_exam= models.IntegerField()
    difficulty_level= models.CharField(max_length=100)
    salary_hike= models.IntegerField()
    pass_percent= models.IntegerField()
    description= models.TextField()
    avg_prep_duration= models.IntegerField()
    student_rating= models.IntegerField()
    exam_duration= models.IntegerField()
    issued_by= models.CharField(max_length=200)
    validity= models.IntegerField()
    exam_format= models.CharField(max_length=200)

    def __str__(self):
        return self.certificate_name
    
    class Meta:
        db_table = 'certification'


class CertificationCourses(models.Model):
    id= models.UUIDField()
    certification_id= models.ForeignKey(Certifications,on_delete=models.CASCADE)
    course_title= models.CharField(max_length=500)
    course_link= models.URLField()
    cost= models.IntegerField()
    
    def __str__(self):
        return self.course_title    
    
    class Meta:
        db_table = 'course'
        
