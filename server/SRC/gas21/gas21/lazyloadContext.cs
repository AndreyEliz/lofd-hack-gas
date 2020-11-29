using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

namespace gas21
{
    public partial class LazyloadContext : DbContext
    {
        public LazyloadContext()
        {
        }

        public LazyloadContext(DbContextOptions<LazyloadContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Awards> Awards { get; set; }
        public virtual DbSet<Contacts> Contacts { get; set; }
        public virtual DbSet<Cv> Cv { get; set; }
        public virtual DbSet<Education> Education { get; set; }
        public virtual DbSet<Languages> Languages { get; set; }
        public virtual DbSet<Publication> Publication { get; set; }
        public virtual DbSet<Skills> Skills { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                
                optionsBuilder
                    .UseSqlServer("Server=tcp:ahy75atd1v.database.windows.net,1433;Initial Catalog=lazyload;Persist Security Info=False;User ID=azureuser;Password=LazyLoad2020;MultipleActiveResultSets=False;Encrypt=True;TrustServerCertificate=False;Connection Timeout=30;");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Awards>(entity =>
            {
                entity.Property(e => e.Date).HasColumnType("date");

                entity.Property(e => e.Summary)
                    .IsRequired()
                    .HasMaxLength(512);

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(512);

                entity.HasOne(d => d.Candidate)
                    .WithMany(p => p.Awards)
                    .HasForeignKey(d => d.CandidateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Awards_CV");
            });

            modelBuilder.Entity<Contacts>(entity =>
            {
                entity.Property(e => e.Email)
                    .IsRequired()
                    .HasMaxLength(512);

                entity.Property(e => e.Phone)
                    .IsRequired()
                    .HasMaxLength(512);

                entity.Property(e => e.Site)
                    .IsRequired()
                    .HasMaxLength(512);

                entity.Property(e => e.Skype)
                    .IsRequired()
                    .HasMaxLength(512);

                entity.HasOne(d => d.Candidate)
                    .WithMany(p => p.Contacts)
                    .HasForeignKey(d => d.CandidateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Contacts_CV");
            });

            modelBuilder.Entity<Cv>(entity =>
            {
                entity.ToTable("CV");

                entity.Property(e => e.Area)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.DateOfBirth).HasColumnType("date");

                entity.Property(e => e.Fio)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.Label)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.Salary)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Status)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.Source)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.Type)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.Property(e => e.Quality)
                    .IsRequired();

                entity.Property(e => e.Internal)
                    .IsRequired();
            });

            modelBuilder.Entity<Education>(entity =>
            {
                entity.Property(e => e.Area)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.Degree)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.Property(e => e.EndDate).HasColumnType("date");

                entity.Property(e => e.StartDate).HasColumnType("date");

                entity.Property(e => e.Title)
                    .IsRequired()
                    .HasMaxLength(256);

                entity.HasOne(d => d.Candidate)
                    .WithMany(p => p.Education)
                    .HasForeignKey(d => d.CandidateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Education_CV");
            });

            modelBuilder.Entity<Languages>(entity =>
            {
                entity.Property(e => e.Language)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.Property(e => e.Level)
                    .IsRequired()
                    .HasMaxLength(50);

                entity.HasOne(d => d.Candidate)
                    .WithMany(p => p.Languages)
                    .HasForeignKey(d => d.CandidateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Languages_CV");
            });

            modelBuilder.Entity<Publication>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(512);

                entity.Property(e => e.Publisher)
                    .IsRequired()
                    .HasMaxLength(512);

                entity.Property(e => e.ReleaseDate).HasColumnType("date");

                entity.Property(e => e.Summary)
                    .IsRequired()
                    .HasMaxLength(2048);

                entity.HasOne(d => d.Candidate)
                    .WithMany(p => p.Publication)
                    .HasForeignKey(d => d.CandidateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Publication_CV");
            });

            modelBuilder.Entity<Skills>(entity =>
            {
                entity.Property(e => e.Name)
                    .IsRequired()
                    .HasMaxLength(500);

                entity.HasOne(d => d.Candidate)
                    .WithMany(p => p.Skills)
                    .HasForeignKey(d => d.CandidateId)
                    .OnDelete(DeleteBehavior.ClientSetNull)
                    .HasConstraintName("FK_Skills_CV");
            });
        }
    }
}
