const mockMeets = [
  {
    meetId: "550e8400-e29b-41d4-a716-446655440000",
    course: "Systems Architecture",
    companyId: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    lecturerId: "9b1deb4d-3b7d-4bad-9bdd-2b0d7b3dcb6d",
    dateTime: "2026-05-20T14:30:00Z",
    place: "Main Hall - Sector B",
    minStudentCount: 15,
    actualParticipants: 0,
    status: "CREATED",
    googleCalendarEventId: "gcal_67890abc"
  },
  {
    meetId: "a12b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
    course: "Intro to Neural Networks",
    companyId: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    lecturerId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    dateTime: "2026-05-21T09:00:00Z",
    place: "Virtual Room 4",
    minStudentCount: 10,
    actualParticipants: 28,
    status: "PENDING",
    googleCalendarEventId: "gcal_12345xyz"
  },
  {
    meetId: "a12b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
    course: "Intro to Neural Networks",
    companyId: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    lecturerId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    dateTime: "2026-05-21T09:00:00Z",
    place: "Virtual Room 4",
    minStudentCount: 10,
    actualParticipants: 28,
    status: "CANCELLED",
    googleCalendarEventId: "gcal_12345xyz"
  },
  {
    meetId: "a12b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
    course: "Intro to Neural Networks",
    companyId: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    lecturerId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    dateTime: "2026-05-21T09:00:00Z",
    place: "Virtual Room 4",
    minStudentCount: 10,
    actualParticipants: 28,
    status: "PENDING",
    googleCalendarEventId: "gcal_12345xyz"
  },
  {
    meetId: "a12b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
    course: "Intro to Neural Networks",
    companyId: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    lecturerId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    dateTime: "2026-05-21T09:00:00Z",
    place: "Virtual Room 4",
    minStudentCount: 10,
    actualParticipants: 28,
    status: "PENDING",
    googleCalendarEventId: "gcal_12345xyz"
  },
  {
    meetId: "a12b3c4d-5e6f-7g8h-9i0j-k1l2m3n4o5p6",
    course: "Intro to Neural Networks",
    companyId: "7c9e6679-7425-40de-944b-e07fc1f90ae7",
    lecturerId: "f47ac10b-58cc-4372-a567-0e02b2c3d479",
    dateTime: "2026-05-21T09:00:00Z",
    place: "Virtual Room 4",
    minStudentCount: 10,
    actualParticipants: 28,
    status: "REJECTED",
    googleCalendarEventId: "gcal_12345xyz"
  }
];

function getStatusClass(status) {
  return status ? `status-${status.toLowerCase()}` : '';
}

function renderMeets(data) {
  const container = document.getElementById('meet-container');

  if (!container) return;

  const htmlContent = data.map(meet => `
    <div class="meet-card">
      <div class="meet-header">
        <h3>${meet.course}</h3>
        <span class="status-badge ${getStatusClass(meet.status)}">${meet.status}</span>
      </div>

      <div class="meet-body">
        <p class="id-text">ID: ${meet.meetId}</p>
        <p><strong>Location:</strong> ${meet.place}</p>
        <p><strong>Time:</strong> ${new Date(meet.dateTime).toLocaleString()}</p>
        
        <div class="participant-box">
          Participants: ${meet.actualParticipants} / ${meet.minStudentCount}
        </div>
      </div>

      <div class="meet-footer">
        <small>Calendar Event: ${meet.googleCalendarEventId || 'N/A'}</small>
      </div>
    </div>
  `).join('');

  container.innerHTML = htmlContent;
}

document.addEventListener('DOMContentLoaded', () => {
  renderMeets(mockMeets);
});