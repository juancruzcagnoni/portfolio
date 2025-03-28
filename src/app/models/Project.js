import mongoose from 'mongoose';

const ProjectSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  subtitle: {
    type: String,
    required: true,
  }
});

export default mongoose.models.Project || mongoose.model('Project', ProjectSchema); 